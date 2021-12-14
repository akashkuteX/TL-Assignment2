import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empObj } from '../interface/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  empObj: empObj= new empObj();
  emid: number=0;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.emid=this.getNewEmpId();
  }
  
  getNewEmpId(){
    const oldRecords=localStorage.getItem('empTable');
    
    if(oldRecords!==null){
      const empTable=JSON.parse(oldRecords);
      return empTable.length + 1;
    }else{
      return 1;
    }
  }
  
  saveEmployee(){
    const latestId=this.getNewEmpId();
    this.empObj.empid= latestId;  
    const oldRecords=localStorage.getItem('empTable');
    if(oldRecords!==null){
      const empTable=JSON.parse(oldRecords);
      empTable.push(this.empObj);
      localStorage.setItem('empTable', JSON.stringify(empTable));

    }else{
      const userArr=[];
      userArr.push(this.empObj);
      localStorage.setItem('empTable', JSON.stringify(userArr));

    }
    this.router.navigate(['../'],
    {relativeTo: this.activatedRoute});




  }

}
