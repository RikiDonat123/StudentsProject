import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  dataSource = new MatTableDataSource<student>();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  searchStudent(text: string) {
    this.studentService.search(text).subscribe((data: student[]) => {
      this.dataSource.data = data;
    });
  }
}
