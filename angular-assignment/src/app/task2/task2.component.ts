import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm ) {
    console.log("Name : " + form.value.employeeName);
    console.log("Address : " + form.value.employeeAddress);
    console.log("Phone No. : " + form.value.employeePhoneNumber);
    console.log("DoB : " + form.value.employeeDob);
    console.log("Email : " + form.value.employeeEmail);
  }

}
