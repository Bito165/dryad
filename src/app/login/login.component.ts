import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login/login.service';
import { CurrentUser } from 'src/services/model/current-user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm:FormGroup;
  email:string;
  password:string;
  user:CurrentUser;
  loginCall
  constructor(private fb:FormBuilder, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });

    localStorage.clear();

  }

  ngOnDestroy(){
    this.loginCall.unsubscribe();
  }

  login(){
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;

    this.loginCall = this.loginService.authenticateUser(this.email, this.password).subscribe(
      res => {
        this.user = res;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        if(this.user){
          this.router.navigate(['/sensors']);
        }
      }
    )


  }

}
