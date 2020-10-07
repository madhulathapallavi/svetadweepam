import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  newuserform:FormGroup;
  // submitted = false;

  firstnameBind:any;
  lastnameBind:any;
  emailBind:any;
  phonenumberBind:any;
  passwordBind:any;
  cpasswordBind:any;
  userid:string = '';

  firstnameIsEmpty = false;
  lastnameIsEmpty = false;
  emailIsEmpty = false;
  phonenumberIsEmpty = false;
  passwordIsEmpty = false;
  cpasswordIsEmpty = false;
  showerror = false;


  constructor(private router:Router,private formBuilder: FormBuilder,private toaster: ToastrService,private auth:AuthService) { 
   
    // auth.getUserDetails().then(value =>{
    //   console.log(value);
    //   this.firstnameBind = value[0].user_firstname;
    //   this.lastnameBind = value[0].user_lastname;
    //   this.emailBind = value[0].user_email;
    //   this.passwordBind = value[0].user_password;
    //   this.phonenumberBind = value[0].user_mobile_number;
    // });
   }
  clearForm(){
      this.firstnameBind='';
      this.lastnameBind='';
      this.emailBind='';
      this.phonenumberBind;
      this.passwordBind='';
      this.cpasswordBind='';
    }

  ngOnInit(){
  ; 
}
  
onSubmit(f:NgForm){
   
      
  // this.auth.newUserDetails({
  //       userid:this.userid,
  //       firstName:f.value.firstname,
  //       lastName : f.value.lastname,
  //       emailId : f.value.email,
  //       phoneNumber: f.value.phonenumber,
  //       password:f.value.password,
  //     }).then(value =>{
  //       console.log(value);
  //       this.toaster.success('NewUser Details Received');
  //       this.router.navigate(['/Usersdetails']);
  //     }).catch(err=>{
  //       console.log(err);
  //       this.toaster.error("Details Not Received");
  //     })
      
    
    console.log(f.value);
  // 
}

  
    verifyPassword(f:NgForm){
        if(f.value.passwordBind == f.value.cpasswordBind){
            this.showerror = false;
        }else{
            this.showerror = true;
        }
    }

}