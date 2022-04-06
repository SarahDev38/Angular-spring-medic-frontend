import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Praticien } from 'src/app/core/models/praticien';
import { PraticienService } from 'src/app/core/services/praticien.service';


@Component({
  selector: 'app-praticien-single',
  templateUrl: './praticien-single.component.html',
  styleUrls: ['./praticien-single.component.scss']
})
export class PraticienSingleComponent implements OnInit {
  praticien$ !: Observable<Praticien>;

  constructor(private praticienService: PraticienService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const praticienId = +this.route.snapshot.params['id'];
    this.praticien$ = this.praticienService.getPraticienById(praticienId);
  }

  onEdit(id: number): void {
    this.router.navigateByUrl(`/praticiens/${id}/update`);
  }
  onBack(): void {
    this.router.navigateByUrl(`/praticiens`);
  }
}
