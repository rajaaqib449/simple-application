import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_helper/api.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  clothesData:any=[];
  clothtesData:any[]=[]
  colthesDataFinal:any=[]
  constructor(private apiservise:ApiService) { }



  GetCLothes(){
    this.apiservise.getAllClothes().subscribe(data=>{
      console.log('the data is ',data)
      this.colthesDataFinal=data
    })


}
  ngOnInit(): void {

  this.GetCLothes();

    
  }



  onDelete(items :any){
    debugger;
   this.apiservise.deleteClothes(items.id).subscribe(res=>{
  
       alert('Record deleted succefully')
     this.GetCLothes();
     
   })
 }

}
