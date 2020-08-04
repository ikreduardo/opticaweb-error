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

  constructor(private router: Router, private authService: AuthService) {
     this.createForm();
    }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }
  ngOnInit(): void {
  }

  login() {
    this.auth = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.authService.login(this.auth).subscribe(res => {
      if (res) {
        var typeus = res.data.user[0].role_id
        console.log(typeus);
        switch(typeus) {
            // Customer
          case 1:
            this.router.navigate(['/customer']);
            console.log('customer')
            break;
            // Admin Opt
          case 2:
            this.router.navigate(['/subadmin']);
            break;
            // SuperAdmin
          case 3:
            console.log('SuperAdmin')
            this.router.navigate(['/Admin']);
            break;
            // Driver
          case 4:
            this.router.navigate(['/driver']);
            break;
        }
      }
      else {
        console.log('Ocurrió un error');
      }
    }, error => {
      switch(error.status) {
        case 401:
          alert("Verifica tus credenciales")
          break;
        case 500:
          alert("Error en el servidor")
          break;
        case 503:
        case 502:
             alert('Error de conexión')
        break;
        default:
          alert("Error")
      }
    });
  }

  get emailValidate(){
    return(
      this.loginForm.get('email').invalid && this.loginForm.get('email').touched
    );
  }

  get passwordValidate(){
    return(
      this.loginForm.get('password').invalid && this.loginForm.get('password').touched
    );
  }
}
