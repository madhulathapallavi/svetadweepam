import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  newuserform:FormGroup;
  // submitted = false;

  firstname:any;
  lastname:string;
  email:any;
  phonenumber:number;
  password:any;
  confirmpassword:any;

  constructor(private router:Router,private formBuilder: FormBuilder,private toastr: ToastrService) { 
    
  }
  clearForm(){
      this.firstname='';
      this.lastname='';
      this.email='';
      this.phonenumber;
      this.password='';
      this.confirmpassword='';
    }

  ngOnInit(): void {
    this.newuserform = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber:['',[Validators.required, Validators.maxLength(10)]],
      // createpassword: ['', [Validators.required, Validators.minLength(6)]],
      // confirmpassword:['',[Validators.required,  Validators.minLength(6)]]
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirmpassword')
    });
  }
  
  get formData() { return this.newuserform.controls; }
  
  onSubmit(){
    this.toastr.success('NewUser Details Received');
    console.log(this.newuserform.value);
  }

}
