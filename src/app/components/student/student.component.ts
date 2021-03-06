import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
  existed = false;

  constructor(private fb: FormBuilder,public router: Router) { }


  ngOnInit() {

    this.userData = this.fb.group({
      "firstname": ['', [Validators.required,Validators.minLength(3)]],
      "lastname": ['', Validators.required],
      "branch": ['', Validators.required],
      "rollnumber": ['', [Validators.required, this.inputValidator.bind(this)]],
      "section": ['', Validators.required],
    })

    this.display();

    // console.log(this.array);
  }
  get f() {
    return this.userData.controls;
  }



  inputValidator(control: FormControl) {
    // debugger;
    var rNumberArray = JSON.parse(localStorage.getItem("students") || '[]').map((item: any) => {
      return parseInt(item.rollnumber);
    })

    let a = parseInt(control.value);
    let boolean = rNumberArray.some((item: any) => item === a);

    if (boolean) {
      this.existed = true;
    } else {
      this.existed = false;
    }
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
    this.goPlaces();
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

  goPlaces() {
    this.router.navigate(['studentData']);
  }


}


