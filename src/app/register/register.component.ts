import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error: string = "";
  registerForm = new FormGroup({
    first_name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),

    age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(60)])
  });

  getRegisterInfo(registerForm: FormGroup) {
    this._AuthService.register(registerForm.value).subscribe((data) => {

      if (data.message == "success") {
        this._Router.navigate(["/login"]);
      }
      else {
        this.error = data.errors.email.message

      }
    });
  }

  constructor(private _AuthService: AuthService, private _Router: Router) { }


  ngOnInit(): void {
  }

}
