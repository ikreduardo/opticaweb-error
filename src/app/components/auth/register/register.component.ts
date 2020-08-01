import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid){
      return Object. values(this.registerForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this.setUser();
      this.authService.register(this.user).subscribe((data: any) => {
        console.log('Registro completado');
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
      });
    }
  }

  createForm(): void{
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]]
    });
  }

  setUser(): void{
    this.user = {
      username: this.registerForm.get('username').value,
      last_name: this.registerForm.get('last_name').value,
      direction: this.registerForm.get('direction').value,
      tel: this.registerForm.get('tel').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    };
  }


  //-------- VALIDACIONES PARA EL REGISTRO ------------//
  get usernameValidate(){
    return(
      this.registerForm.get('username').invalid && this.registerForm.get('username').touched
    );
  }

 
  get lastnameValidate(){
    return(
      this.registerForm.get('last_name').invalid && this.registerForm.get('last_name').touched
    );
  }

  get directionValidate(){
    return(
      this.registerForm.get('direction').invalid && this.registerForm.get('direction').touched
    );
  }

  get phoneValidate(){
    return(
      this.registerForm.get('tel').invalid && this.registerForm.get('tel').touched
    );
  }

  get emailValidate(){
    return(
      this.registerForm.get('email').invalid && this.registerForm.get('email').touched
    );
  }
  get passwordValidate(){
    return(
      this.registerForm.get('password').invalid && this.registerForm.get('password').touched
    );
  }
  get passwordValidate2(){
    const pass = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;
    return pass === pass2 ? false : true;
  }

}
