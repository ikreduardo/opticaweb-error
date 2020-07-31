import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.registerForm.value);
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
    return pass === pass2 && pass > 0 ? false : true;
  }

}
