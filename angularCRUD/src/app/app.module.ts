import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'


import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './employee/employee-details/create-employee.component';
import {selectValidatorDirective} from './employee/shared/select-validator.directive';
import {confirmPasswordValidator} from './employee/shared/confirm-password-validator.directive';


const appRoutes: Routes = 
[
  {path: 'list' , component: EmployeeDetailsComponent  },
  {path: 'create' , component: CreateEmployeeComponent  },
  {path: '' , redirectTo:'list' , pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,selectValidatorDirective,confirmPasswordValidator
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule,BsDatepickerModule.forRoot(), ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
