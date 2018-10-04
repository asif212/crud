import { Component, OnInit } from '@angular/core';
import {employeeModel} from '../Models/employeeDetails.model' 
@Component({
  
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: employeeModel[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/placeholder.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/placeholder.jpg'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/placeholder.jpg'
    },
    {
      id:4,
      name:'Asif',
      gender:'Male',
      contactPreference:'LandLine',
      phoneNumber: 8586978851,
      dateOfBirth: new Date('02/25/1992'),
      department:'AR-VR',
      isActive: true,
      photoPath:'assets/images/placeholder.jpg'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
