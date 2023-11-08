import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meeting } from '../../models/meeting.model';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent implements OnInit {

  public form: FormGroup;

  private meeting: Meeting;
  private studentID: Meeting;

  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<MeetingFormComponent>) {
      this.meeting = data.meeting;
      this.studentID = data.studentID;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      studentID: [{ value: this.meeting?.studentID || this.studentID, disabled: true }, Validators.required],
      meetingDate: [this.meeting?.meetingDate || new Date(), Validators.required],
      subject: [this.meeting?.subject, Validators.required],
      details: [this.meeting?.details, Validators.required],
      nextMeeting: [this.meeting?.nextMeeting, Validators.required]
    });
  }

  save() {
    const formValue = this.form.getRawValue();
    if (this.meeting) {
      formValue.meetingId = this.meeting.meetingId;
    }
    this.dialogRef.close(formValue);
  }
}
