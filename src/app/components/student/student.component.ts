import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  headers = ["firstName", "lastName", "branch", "rollNumber", "section"];

  array: any;
  data: any;
  storeData: any;
  students: any;
  userData!: FormGroup;
  submitedData: boolean | undefined;
  studentData: any;

  constructor(private fb: FormBuilder) { }



  ngOnInit() {

    this.userData = this.fb.group({
      "firstname": ['', Validators.required,Validators.minLength(5)],
      "lastname": ['', Validators.required],
      "branch": ['', Validators.required],
      "rollnumber": ['', Validators.required],
      "section": ['', Validators.required],
    })
  }
  get f() {
    return this.userData.controls;
  }

  submitData() {
    this.submitedData = true;
    this.students = this.userData.value;

    this.addStudents(this.students);
    this.display();

  }

  addStudents(student: any) {
    let arr = [];

    arr.push(student);

    // console.log(student);

    this.storeData = localStorage.getItem('students');
    if (!this.storeData) {

      localStorage.setItem("students", JSON.stringify(arr));


    } else {
      let array = localStorage.getItem('students');
      if (array) {
        this.array = JSON.parse(array);
        this.array.push(student);
        localStorage.setItem("students", JSON.stringify(this.array));
      }
    }
    // localStorage.setItem("students", JSON.stringify(student));
  }
  display() {
    // debugger;
    let array = localStorage.getItem('students');
    if (array) {
      this.array = JSON.parse(array);
      // console.log(this.data);
    }

  }

}


