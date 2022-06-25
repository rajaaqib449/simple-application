import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeModel } from '../Model/employee-dash boeard.model';
import { ApiService } from '../_helper/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeModelObj: EmployeModel =new EmployeModel();
  employeeData:any=[];
  newform !: FormGroup;
 id:any="";
  basicinfo: any;
  getEmploye: any;
  constructor( private apiservice: ApiService, private router: Router, private formbuilder: FormBuilder ) { 
   
   
   
  
  }

  getAllmployee(){
      this.apiservice.getEmploye().subscribe(data=>{
        console.log(data);
        this.employeeData=data;
      })
  }
    
  
  ngOnInit(): void {
   
this.getAllmployee();
   }
  //  onEdit(data:any) {
  //   this.apiservice.getEmployebyid(this.id).subscribe(data=>{
  //     console.log('data', data)
  //   })
  //   this.router.navigate(['/editData/id'])
  // }
  onUpdate(){
  
  }
   onDelete(user :any){
     debugger;
    this.apiservice.deleteEmployee(user.id).subscribe(res=>{
   
        alert('Record deleted succefully')
      this.getAllmployee();
      
    })
  }
  //  getEmploye(){
  //    debugger;
  //   this.apiservice.getEmploye() .subscribe(res=>{
  //     console.log(res);
  //     this.employeeData=res;
  //   })
  //   }

}
