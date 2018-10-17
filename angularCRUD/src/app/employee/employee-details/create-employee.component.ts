import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { departments } from '../Models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { employeeModel } from '../Models/employeeDetails.model';

@Component({

  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: employeeModel =
    {
      id: null,
      name: null,
      gender: null,
      contactPreference: null,
      phoneNumber: null,
      email: null,
      dateOfBirth: null,
      department: "-1",
      isActive: null,
      photoPath: null
    };
  toggleshow: Boolean = false;
  showHideImg(): void {
    this.toggleshow = !this.toggleshow;
  }
  datepickerConfig: Partial<BsDatepickerConfig>;
  departments: departments[] = [
    { id: 1, name: "HR" },
    { id: 2, name: "Help Desk" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" },
    { id: 5, name: "Admin" },
  ];

  constructor() {
    this.datepickerConfig = Object.assign({}, {
      containerClass: "theme-dark-blue",
      showWeekNumbers: false,
    })
  }

  ngOnInit() {

  }
  saveEmployeeDetails(empDet: employeeModel): void {
    console.log(empDet);
  }

}
