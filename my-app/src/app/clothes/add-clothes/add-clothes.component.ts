import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { clotheModel } from 'src/app/Model/ClothesModel';

import { ApiService } from 'src/app/_helper/api.service';

@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrls: ['./add-clothes.component.css']
})
export class AddClothesComponent implements OnInit {



  newform !: FormGroup;
  ClotheModelObj: clotheModel =new clotheModel();
  api: any;
 formValidationMessage={
  clotheName:[{
     type:"required",
     message:"This field is required"
   }],
   clotheType:[{
    type:"required",
    message:"This field is required"
   }],
   clotheBrandName:[{
    type:"required",
    message:"This field is required"
   }],
   Quntity:[{
    type:"required",
    message:"This field is required"
   }],
   gender:[{
    type:"required",
    message:"This field is required"
   }]
 }

  constructor(private formbuilder: FormBuilder, private apiservice: ApiService,  private router: Router) { }

  ngOnInit(): void {
   
  this.newform=this.formbuilder.group({
    clotheName:['',Validators.required],
    clotheType:['',Validators.required],
    clotheBrandName:['',Validators.email],
    Gender:[''],
    Quntity:['',Validators.required],




  })
 
  }
  postClothes(){
    if (this.newform.invalid) {
      alert('Form is INVALID');
      return;
    }
    else{

    this.ClotheModelObj.clotheName=this.newform.value.clotheName;
    
    this.ClotheModelObj.clotheType=this.newform.value.clotheType;
    
    this.ClotheModelObj.clotheBrandName=this.newform.value.clotheBrandName;

    this.ClotheModelObj.Gender=this.newform.value.Gender;
    
    this.ClotheModelObj.Quntity=this.newform.value.Quntity;
    

    debugger;
    this.apiservice.postClothes(this.ClotheModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Clothes added successfully")
      
      this.router.navigate(['/Clothes']);
      this.newform.reset();
      

    })
   
  
    

  }


}
}
