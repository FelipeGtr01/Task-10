import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }
  
  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
    .subscribe(student => this.student = student);
  }
  goBack(): void {
    this.location.back();
  }
}
