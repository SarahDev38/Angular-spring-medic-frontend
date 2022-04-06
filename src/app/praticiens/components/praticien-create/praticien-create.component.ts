import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Praticien } from 'src/app/core/models/praticien';
import { PraticienService } from 'src/app/core/services/praticien.service';

@Component({
  selector: 'app-praticien-create',
  templateUrl: './praticien-create.component.html',
  styleUrls: ['./praticien-create.component.scss']
})
export class PraticienCreateComponent implements OnInit {
  praticienForm!: FormGroup;
  praticienPreview$!: Observable<Praticien>;

  constructor(private formBuilder: FormBuilder, private praticienService: PraticienService, private router: Router) { }

  ngOnInit(): void {
    this.praticienForm = this.formBuilder.group({
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]]
    }, {
      updateOn: 'blur'
    });

    this.praticienPreview$ = this.praticienForm.valueChanges.pipe(
      map(formValue => ({ ...formValue, id: 0 }))
    );
  }

  onSubmitForm() {
    console.log(this.praticienForm.value);
    this.praticienService.addPraticien(this.praticienForm.value).pipe(
      tap(() => this.router.navigateByUrl('/praticiens'))
    ).subscribe();
  }

  onBack(): void {
    this.router.navigateByUrl(`/praticiens`);
  }
}
