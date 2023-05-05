import { AuthService } from './../auth.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string = "";
  loginForm = new FormGroup({
    email:new FormControl (null ,[Validators.email ,Validators.required]),
    password:new FormControl (null,[Validators.required]),
  });

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  

   getLoginForm(loginForm: FormGroup) {
    this._AuthService.login(loginForm.value).subscribe((data) => {
      
      if (data.message == "success") {
       
        localStorage.setItem("userToken", data.token);
        this._AuthService.saveCurrentToken();
  
        this._Router.navigate(["home"]);
      }
      else if (data.message == "incorrect password") {
        this.error = data.message;
        
      }
    });
   }

  ngOnInit(): void {
  }

}
