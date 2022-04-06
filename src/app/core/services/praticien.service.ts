import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Praticien } from '../models/praticien';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {
  private praticiensUrl: string;

  constructor(private http: HttpClient) {
    this.praticiensUrl = 'http://localhost:8080/praticiens';
  }

  public findAll(): Observable<Praticien[]> {
    return this.http.get<Praticien[]>(this.praticiensUrl);
  }

  public save(praticien: Praticien) {
    return this.http.post<Praticien>(this.praticiensUrl, praticien);
  }

  public getPraticienById(id: number): Observable<Praticien> {
    return this.http.get<Praticien>(this.praticiensUrl + '/' + id);
  }

  addPraticien(formValue: { nom: string, prenom: string }): Observable<Praticien> {
    return this.http.post<Praticien>(this.praticiensUrl + '/create', formValue);
  }
}
