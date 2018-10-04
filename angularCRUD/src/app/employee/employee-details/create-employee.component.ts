import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {departments} from '../Models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker'

@Component({
  
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datepickerConfig:Partial<BsDatepickerConfig>;
  departments:departments[]= [
    {id:1, name:"HR"},
    {id:2, name:"Help Desk"},
    {id:3, name:"IT"},
    {id:4, name:"Payroll"},
    {id:5, name:"Admin"},
  ];

  constructor() { 
    this.datepickerConfig= Object.assign({} ,{
      containerClass: "theme-dark-blue",
      showWeekNumbers:false,
      minDate: new Date(),
      maxDate: new Date("2018/12/30" ),
    })
  }

  ngOnInit() {
   
  }
  saveEmployeeDetails(empDet:NgForm) : void
  {
    console.log(empDet);
  }

}
