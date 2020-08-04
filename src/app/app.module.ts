import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';

import { AppRoutingModule } from './app-routing.module';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/main/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { SubadminopComponent } from './components/dashboard/subadminop/subadminop.component';
import { DriverComponent } from './components/dashboard/driver/driver.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ModalComponent,
    CustomerComponent,
    SubadminopComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //   MDBBootstrapModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
