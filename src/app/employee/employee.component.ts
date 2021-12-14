import { Component, OnInit } from '@angular/core';
import { empObj } from '../interface/user';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empTable: empObj[]=[];


  constructor() { }

  ngOnInit(): void {
    
  }

}
