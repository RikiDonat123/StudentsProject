import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly studentUrl = 'students';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { 
  }

  getAllStudents(): Observable<student[]> {
    return this.http.get<student[]>(this.baseUrl + this.studentUrl);
  }

  search(text: string): Observable<student[]> {
    return this.http.get<student[]>(this.baseUrl + this.studentUrl + '/search', {
      params: {
        text: text
      }
    });
  }
}
