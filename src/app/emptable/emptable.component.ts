import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { reverse } from 'dns';
import { findIndex } from 'rxjs';
import { empObj } from '../interface/user';

@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})
export class EmptableComponent implements OnInit {
  orderHeader: String='';
  empTable: empObj[]=[];
  firstName:any;
  p : number=1;

  constructor() {
    // this.empTable=new empObj[];
   }

  ngOnInit(): void {
    const records= localStorage.getItem('empTable');
    if(records!==null){
      this.empTable= JSON.parse(records);

    }
    
  }
  delete(id:any){
    const oldRecords=localStorage.getItem('empTable');
    if(confirm('Do you want to delete this record?'))
    
    
    if(oldRecords!==null){
      const empTable=JSON.parse(oldRecords);
      empTable.splice(empTable.findIndex((a:any)=>a.empid==id),1);
      localStorage.setItem('empTable', JSON.stringify(empTable));

    }
    const records= localStorage.getItem('empTable');

    if(records!==null){
      this.empTable= JSON.parse(records);

    }


  }
  Search(){
    if(this.firstName ==""){
      this.ngOnInit();
    }else{
      this.empTable =this.empTable.filter(res=>{
        return res.empname?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }
  key: string ='age';
  reverse:boolean = false;
  sort(headerName:String){
    
    this.orderHeader=headerName;
    // this.key =key;
    this.reverse = !this.reverse;
  }
  

}
