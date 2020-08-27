import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  mail={email:'',psw:'',cpass:''}
  emailpattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passpattern = "^(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";


  constructor() { }

  ngOnInit(): void {
  }
  onsignup(form:NgForm){

  }
}
