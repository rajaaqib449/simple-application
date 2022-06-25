import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeModel } from 'src/app/Model/employee-dash boeard.model';
import { ApiService } from 'src/app/_helper/api.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {



  newform !: FormGroup;
  employeeModelObj: EmployeModel =new EmployeModel();
  api: any;
 formValidationMessage={
   firstname:[{
     type:"required",
     message:"This field is required"
   }],
   lastname:[{
    type:"required",
    message:"This field is required"
   }],
   email:[{
    type:"required",
    message:"This field is required"
   }],
   mobile:[{
    type:"required",
    message:"This field is required"
   }],
   salry:[{
    type:"required",
    message:"This field is required"
   }]
 }

  constructor(private formbuilder: FormBuilder, private apiservice: ApiService,  private router: Router) { }

  ngOnInit(): void {
   
  this.newform=this.formbuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.email],
    Gender:[''],
    mobile:['',Validators.required],
    salry:['',Validators.required],



  })
 
  }
  postEmployeeDetails(){
    if (this.newform.invalid) {
      alert('Form is INVALID');
      return;
    }
    else{

    this.employeeModelObj.firstname=this.newform.value.firstname;
    
    this.employeeModelObj.lastname=this.newform.value.lastname;
    
    this.employeeModelObj.email=this.newform.value.email;

    this.employeeModelObj.Gender=this.newform.value.Gender;
    
    this.employeeModelObj.mobile=this.newform.value.mobile;
    
    this.employeeModelObj.salry=this.newform.value.salry;
    debugger;
    this.apiservice.postEmploye(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added successfully")
      
      this.router.navigate(['/Home']);
      this.newform.reset();
      

    })
   
  
    

  }


}
}
