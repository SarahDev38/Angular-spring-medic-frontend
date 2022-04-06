import { Component, OnInit } from '@angular/core';
import { Praticien } from 'src/app/core/models/praticien';
import { PraticienService } from 'src/app/core/services/praticien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-praticien-list',
  templateUrl: './praticien-list.component.html',
  styleUrls: ['./praticien-list.component.scss']
})
export class PraticienListComponent implements OnInit {

  praticiens!: Praticien[];

  constructor(private praticienService: PraticienService,
    private router: Router) { }

  ngOnInit(): void {
    this.praticienService.findAll().subscribe(data => this.praticiens = data)
  }

  public onViewPraticien(id: number): void {
   this.router.navigateByUrl(`/praticiens/${id}`);
  }

  public onCreate():void {

    this.router.navigateByUrl(`/praticiens/create`);
  }
}
