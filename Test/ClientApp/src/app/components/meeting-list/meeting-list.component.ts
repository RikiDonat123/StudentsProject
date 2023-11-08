import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MeetingFormComponent } from '../meeting-form/meeting-form.component';
import { Meeting } from '../../models/meeting.model';
import { MeetingService } from '../../services/meeting.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  dataSource: MatTableDataSource<Meeting>;
  displayedColumns: string[] = ['studentID', 'meetingDate', 'subject', 'details', 'nextMeeting'];

  @ViewChild(MatTable) table: MatTable<Meeting>;

  private studentID: string;

  constructor(private meetingService: MeetingService,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMeetings();
  }

  getMeetings() {
    this.studentID = this.route.snapshot.paramMap.get('id')!;
    this.meetingService.getMeetingsByStudent(this.studentID).subscribe((data: Meeting[]) => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  displayMeeting(meeting: Meeting) {
    const dialogRef = this.dialog.open(MeetingFormComponent, {
      data: {
        meeting: meeting
      },
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.meetingService.updateMeeting(result).subscribe(() => {
        const index = this.dataSource.data.findIndex(item => item.meetingId === result.meetingId);
        this.dataSource.data[index] = result;
        this.table.renderRows();
      });
    });
  }

  createNewMeeting() {
    const dialogRef = this.dialog.open(MeetingFormComponent, {
      data: {
        studentID: this.studentID
      },
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.meetingService.addMeeting(result).subscribe((meeting: Meeting) => {
        this.dataSource.data.push(meeting);
        this.table.renderRows();
      });
    });
  }
}
