import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { getMaxListeners } from 'process';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {
  loginform: FormGroup;
  submitted = false;
  email = '';
  password = '';

  constructor(private formBuilder: FormBuilder ,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginform.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginform.invalid) {
      return;
    }
    // get email() {
    //    return this.heroForm.get('email'); 
    //   }

  }
  onclick(f) {
    console.log(f.value)
    if (( this.email == "narayana@inlightdata.com" || this.email == "muralimohanmakkuva2@gmail.com" || this.email == "adarisrividya03@gmail.com" || this.email == "madhulathapallavi@gmail.com" || this.email == "sindhudurvasulak@gmail.com" || this.email == "madhavaphani16@gmail.com" || this.email =="prabhunath453@gmail.com") && (this.password == "123456")) {   
      // alert("success")
      this.router.navigate(['/dashboard']) 
    }
    else {
      this.toastr.error('Invalid Login Credentials');
    }


  }





}







