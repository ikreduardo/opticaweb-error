import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IAuth } from 'src/app/models/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: IAuth;
  loginForm: FormGroup;
  constructor(private router: Router, private authSvc: AuthService) { this.createForm(); }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }
  ngOnInit(): void {
  }

  get emailValidate(){
    return(
      this.loginForm.get('email').invalid && this.loginForm.get('email').touched
    )
  }

  get passwordValidate(){
    return(
      this.loginForm.get('password').invalid && this.loginForm.get('password').touched
    )
  }

  login() {
    this.auth = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.authSvc.login(this.auth).subscribe(res => {
      console.log(res);
      if(res) {
        console.log('Bienvenido usuario!');
        this.router.navigate(['/home']);
      }
      else {
        console.log('Ocurrió un error');
      }
    });
  }

}
