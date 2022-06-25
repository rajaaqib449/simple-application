import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mixinTabIndex } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/_helper/api.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  newform !: FormGroup;
  id: any ='';
  employeeData:any=[];
  data:any="";
  basicInfo: any;
  formValue: any;
  formvalidationmessage={
    email:[{
     type:"required",
     message:"Field is requied"
    }]

  }
  constructor(private formbuilder: FormBuilder, private apiservice: ApiService,  private router: Router , private activeRouter :ActivatedRoute) { }

  ngOnInit(): void {
    this.newform=this.formbuilder.group({

      firstname:[''],
      lastname:[''],
      email:['',Validators.email],
      Gender:[''],
      mobile:[''],
      salry:[''],
  
    })
  this.id = this.activeRouter.snapshot.params['id'];
  this.getDataById();
  }
  getDataById(){
    this.apiservice.getEmployebyId(this.id).subscribe(res=>{
      debugger;
      console.log('responce',res);
      this.employeeData=res;
      this.newform.patchValue(res);
      debugger;      
    })
  }
  onUpdate(){
    if(this.newform.invalid){
      alert('Invalid form')
      return ;
    }
    debugger;
   
      this.apiservice.updateEmploye(this.id,this.newform.value).subscribe( response => {
        debugger;
        response["data"] = this.newform.value;
        console.log('data',response);
        alert("Update Successfully ")
        this.router.navigate(['/Home']);
    
    })
   
  }





}
