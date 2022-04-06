import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultation } from '../models/consultation';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  private consultationUrl: string;

  constructor(private http: HttpClient) {
    this.consultationUrl = 'http://localhost:8080/consultations';
  }

  public findAll(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(this.consultationUrl);
  }

  public save(consultation: Consultation) {
    return this.http.post<Consultation>(this.consultationUrl, consultation);
  }

  public getUrl() : string {
    return this.consultationUrl;
  }
}
