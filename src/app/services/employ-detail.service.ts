import { Injectable } from '@angular/core';
import { EmployDetail, EmpProMap, ProjectDetail } from '../models/employ.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployDetailService {
  private baseUrl = 'http://localhost:8080/employ/rest';
  constructor(private http: HttpClient) { }

  addemploy(employ: EmployDetail): Observable<EmployDetail[]>{
    return this.http.post<EmployDetail[]>(`${this.baseUrl}/insertEmp`,employ);
  }
  delemploy(id: String): Observable<EmployDetail[]>{
    return this.http.delete<EmployDetail[]>(`${this.baseUrl}/deleteEmp/${id}`);
  }
  getemploy(): Observable<EmployDetail[]>{
    return this.http.get<EmployDetail[]>(`${this.baseUrl}/selectEmp`);
  }
  editemploy(employ: EmployDetail): Observable<EmployDetail[]>{
    return this.http.put<EmployDetail[]>(`${this.baseUrl}/updateEmp`,employ);
  }

  addProject(project: ProjectDetail): Observable<ProjectDetail[]>{
    return this.http.post<ProjectDetail[]>(`${this.baseUrl}/insertProj`,project);
  }
  delProject(id: String): Observable<ProjectDetail[]>{
    return this.http.delete<ProjectDetail[]>(`${this.baseUrl}/deleteProj/${id}`);
  }
  getProject(): Observable<ProjectDetail[]>{
    return this.http.get<ProjectDetail[]>(`${this.baseUrl}/selectProj`);
  }
  editProject(project: ProjectDetail): Observable<ProjectDetail[]>{
    return this.http.put<ProjectDetail[]>(`${this.baseUrl}/updateProj`,project);
  }

  addmapp(mapp: EmpProMap): Observable<EmpProMap[]>{
    return this.http.post<EmpProMap[]>(`${this.baseUrl}/insertMapping`,mapp);
  }
  delmapp(id: number): Observable<EmpProMap[]>{
    return this.http.delete<EmpProMap[]>(`${this.baseUrl}/deleteMapping/${id}`);
  }
  getmapp(): Observable<EmpProMap[]>{
    return this.http.get<EmpProMap[]>(`${this.baseUrl}/selectMapping`);
  }
}
