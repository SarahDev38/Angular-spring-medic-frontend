import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientUrl: string;

  constructor(private http: HttpClient) {
    this.patientUrl = 'http://localhost:8080/patients';
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.patientUrl, patient);
  }
}
