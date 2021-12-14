import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empObj } from '../interface/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  empObj: empObj;
  emid: number=0;
  constructor(private route:ActivatedRoute, private router: Router) {
    this.empObj = new empObj();

    this.route.params.subscribe((res)=>{
      this.empObj.empid=res['id'];
    });
   }

  ngOnInit(): void {
    debugger;
    // this.emid=this.getNewEmpId();
    const oldRecords=localStorage.getItem('empTable');
    
    if(oldRecords!==null){
      const empTable=JSON.parse(oldRecords);
      const currentEmp = empTable.find((m: any) => m.empid == this.empObj.empid);
      if(currentEmp !== undefined){
        this.empObj.empname=currentEmp.empname;
        this.empObj.empid=currentEmp.empid;
        this.empObj.empage=currentEmp.empage;
      }

  }
  
  
  }
  
  updateEmp(){
    debugger;
     
    const oldRecords=localStorage.getItem('empTable');
    if(oldRecords!==null){
      const empTable=JSON.parse(oldRecords);
      empTable.splice(empTable.findIndex((a:any)=>a.empid==this.empObj.empid),1);
      empTable.push(this.empObj);
      localStorage.setItem('empTable', JSON.stringify(empTable));

    }
    this.router.navigate(['../'],
    {relativeTo: this.route});
  }

}
  
