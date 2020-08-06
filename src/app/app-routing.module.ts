import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/main/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ModalComponent } from './modal/modal.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { SubadminopComponent } from './components/dashboard/subadminop/subadminop.component';
import { DriverComponent } from './components/dashboard/driver/driver.component'; 
import { AuthGuard } from './components/auth/auth.guard'

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'login', component: LoginComponent },   
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'modal', component: ModalComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Admin', component:AdminComponent,
    canActivate: [AuthGuard], },
  { path: 'subadmin', component: SubadminopComponent,
    canActivate: [AuthGuard] },
  { path: 'customer', component: CustomerComponent,
    canActivate: [AuthGuard] },
  { path: 'driver', component: DriverComponent,
    canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
