import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AdddataComponent } from './Add Employe/adddata/adddata.component';
import { EditDataComponent } from './home/edit-data/edit-data.component';
import { ViewComponent } from './home/view/view.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AddClothesComponent } from './clothes/add-clothes/add-clothes.component';
const routes: Routes = [
{
path:'View/:id',
component:ViewComponent,
},
{
path:'editData/:id',
component:EditDataComponent,
},
{
path:'addClothesData',
component:AddClothesComponent
},

  {
    path: 'Adddata',
    component: AdddataComponent,
   
  },
 
  {
    path: 'Home',
    component: HomeComponent,
   
  },
  {
    path:'Clothes',
    component: ClothesComponent,
  
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
