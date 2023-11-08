import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  dataSource: MatTableDataSource<student>;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe((data: student[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.filterPredicate = function(data, filter: string): boolean {
        return data.fullName.toLowerCase().includes(filter) || data.id.toLowerCase().includes(filter);
      };
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
