import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';


import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdddataComponent } from './Add Employe/adddata/adddata.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { EditDataComponent } from './home/edit-data/edit-data.component';


import { CommonModule } from '@angular/common';
import { ViewComponent } from './home/view/view.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AddClothesComponent } from './clothes/add-clothes/add-clothes.component';
import { ViewClothesComponent } from './clothes/view-clothes/view-clothes.component';
import { EditClothesComponent } from './clothes/edit-clothes/edit-clothes.component';


@NgModule({
  declarations: [
    EditDataComponent,
    AppComponent,
    HomeComponent,
   
    LoginComponent,
    AdddataComponent,
    ViewComponent,
    ClothesComponent,
    AddClothesComponent,
    ViewClothesComponent,
    EditClothesComponent,
   
  
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
    ReactiveFormsModule,
  FormsModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,

  MatSelectModule,
  MatOptionModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
