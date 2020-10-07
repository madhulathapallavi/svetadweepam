import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  mobileNumber : string = '';
  // email : string = '';
  // userid:string = '';
  changePassword : string =''; 
  userMobNumberIsEmpty = false;
  userMobNumberIsWrong = false;
  generatedOTP: string;
  generateOTP():string { 
            
    // Declare a digits variable  
    // which stores all digits 
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 
} 

showOtpScreen = false;
otpEnteredIsWrong = false;
showPasswordChange = false;
passwordIsEmpty = false;
showMobileNumber = true;
  constructor(private toaster : ToastrService,private auth:AuthService, private router:Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }
 
  onVerifyUserMobileNumber(f:NgForm){
    this.userMobNumberIsEmpty = false;
    if(f.value.mobileNumber == ""){
      this.userMobNumberIsEmpty = true;
      }
       
      else {
        this.generatedOTP = this.generateOTP();

        // this.auth.verifyUserMobileNumber({otp: this.generatedOTP, id: f.value.mobileNumber})
        //     .then(value => {

        //         console.log(value);
        //         this.mobileNumber = f.value.mobileNumber;
        //         this.userid = f.value.userid
        //         this.email = f.value.email;
        //         this.showMobileNumber = false;
        //         this.showOtpScreen = true;
              

        //     }).catch(err => {
        //         console.log(err);

        //         this.userMobNumberIsWrong = true;
        //     });
    }
      

   }

  onConfirmMobileNo(f: NgForm){
    this.otpEnteredIsWrong = false;
    if(f.value.numberotp == this.generatedOTP){
        this.showPasswordChange = true;
        this.showMobileNumber = false;
    }else{
        this.otpEnteredIsWrong = true;
    }
}

onUpdate(f:NgForm){

  if(f.value.changePassword == ""){
      this.passwordIsEmpty = true;
  }else{

      // this.auth.updateUserPassword({ id:this.mobileNumber, password:f.value.changePassword})
      // .then(value => {

      //     console.log(value);
      //     this.toaster.success("Password updated successfully. please login");
      
      //     this.router.navigate(['/'], { relativeTo: this.route.parent });

      // }).catch(err => {
      //     console.log(err);

      //   this.toaster.error("please try again");
      // });

  }
}



}