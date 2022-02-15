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
  editObject: any;
  rNumber: any;

  constructor(private fb: FormBuilder) { }



  ngOnInit() {

    this.userData = this.fb.group({
      "firstname": ['', Validators.required],
      "lastname": ['', Validators.required],
      "branch": ['', Validators.required],
      "rollnumber": ['', Validators.required],
      "section": ['', Validators.required],
    })

    this.display();

    // console.log(this.array);
  }
  get f() {
    return this.userData.controls;
  }

  submitData() {
    this.submitedData = true;


    // console.log(this.editObject.rollnumber);
    if (this.editObject) {

      this.rNumber = this.editObject.rollnumber;
      this.students = this.userData.value;


    } else {
      this.students = this.userData.value;
    }

    this.addStudents(this.students);
    this.display();
    this.userData.reset();
    this.userData.clearValidators();
  }

  addStudents(student: any) {

    let storeData = JSON.parse(localStorage.getItem('students') || '[]');

    let index = storeData.findIndex((x: { rollnumber: any; }) => x.rollnumber === student.rollnumber);
    // debugger
    let arr = [];

    if (index !== -1) {
      storeData[index] = student;
      localStorage.setItem("students", JSON.stringify(storeData))
    } else {
      let lstorageArray = localStorage.getItem("students");
      if (lstorageArray) {
        // debugger;
        this.array = JSON.parse(lstorageArray);
        this.array.push(student);
        localStorage.setItem("students", JSON.stringify(this.array));
      } else {
        arr.push(student)
        localStorage.setItem("students", JSON.stringify(arr));
      }

    }

  }
  display() {
    // debugger;
    let array = localStorage.getItem('students');
    if (array) {
      this.array = JSON.parse(localStorage.getItem('students') || '[]');
      // console.log(this.data);
    }

  }

  editStudentEdit(data: any) {
    this.userData.patchValue(
      data
      // formControlName2: myValue2 (can be omitted)
    );
  }


}


