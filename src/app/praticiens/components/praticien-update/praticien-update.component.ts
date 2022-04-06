import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-praticien-update',
  templateUrl: './praticien-update.component.html',
  styleUrls: ['./praticien-update.component.scss']
})
export class PraticienUpdateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigateByUrl(`/praticiens`);
  }

}
