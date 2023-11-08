import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<student>;
  displayedColumns: string[] = ['fullName', 'id', 'phoneNumber'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
