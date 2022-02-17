import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  array:any;
  headers = ["firstName", "lastName", "branch", "rollNumber", "section"];
  constructor() { }

  ngOnInit(): void {

    this.display();

  }

  display() {
    // debugger;
    let array = localStorage.getItem('students');
    if (array) {
      this.array = JSON.parse(localStorage.getItem('students') || '[]');
      // console.log(this.data);
    }

  }

}
