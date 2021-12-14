import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DepartmentComponent } from './department/department.component';
import { EditComponent } from './edit/edit.component';
import {EmployeeComponent} from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent

  },
  {
  path:'employee',
  component: EmployeeComponent
  },
  {
  path:'department',
  component: DepartmentComponent
  },
  {
  path:'employee/add',
  component: AddComponent
  },
  {
  path:'employee/edit/:id',
  component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
