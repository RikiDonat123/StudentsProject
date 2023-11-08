import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../models/meeting.model';
import { student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  private readonly meetingUrl = 'meeting';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { 
  }

  getMeetingsByStudent(id: string): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.baseUrl}${this.meetingUrl}/${id}`);
  }

  addMeeting(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting> (this.baseUrl + this.meetingUrl, meeting);
  }

  updateMeeting(meeting: Meeting) {
    return this.http.put(this.baseUrl + this.meetingUrl, meeting);
  }
}
