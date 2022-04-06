import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageUrl!: string;
  
  constructor(private router: Router) {
    this.imageUrl = "/assets/stetoscope.png";
  }

  ngOnInit(): void {
  }

  onAddNewPraticien() {
    this.router.navigateByUrl('/addpraticien');
  }

}
