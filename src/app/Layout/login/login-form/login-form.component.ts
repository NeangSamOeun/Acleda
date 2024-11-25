import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceLoginService } from '../service/service-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serviceLogin: ServiceLoginService,
    private route: Router
  ) {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      password: [null, [Validators.required, Validators.maxLength(6)]],
    });
  }

  onLogin() {
    if (this.userForm.valid) {
      const { username, password } = this.userForm.value;
      if (this.serviceLogin.Login( username, password )) {
        this.route.navigate(['/layout/major']);
        console.log('Login successfully!');
      } else {
        console.log('login failed');
      }
    }
  }
  onClick(){
    if(this.userForm.valid){
      console.log('Click successfully')
    }else{
      console.log('Click failed')
    }
  }
  
}
