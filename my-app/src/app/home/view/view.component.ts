import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/_helper/api.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: any ='';
  basicInfor: any;

  constructor(private apiservice: ApiService, private activeRouter :ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activeRouter.snapshot.params['id'];
    this.getDataById();

}
getDataById(){
  this.apiservice.getEmployebyId(this.id).subscribe(res=>{
    debugger;
     console.log('responce',res);
     this.basicInfor=res;
})

  
}
  

}
