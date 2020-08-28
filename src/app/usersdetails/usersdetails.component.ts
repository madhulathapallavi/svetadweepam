import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent implements OnInit {
  
  firstname:string;
  users=[];
  usersList=[
      
    { Name:'murali', subscriptionId:'1', subscriptionStartDate:'2-3-20', subscriptionEndDate:'9-10-20',phoneNo:7993509743 },
    { Name:'mohan', subscriptionId:'2', subscriptionStartDate:'3-3-20', subscriptionEndDate:'10-10-0',phoneNo:8309409777 },
    { Name:'pallavi', subscriptionId:'3', subscriptionStartDate:'4-3-20', subscriptionEndDate:'10-10-0',phoneNo:54959595 },
    { Name:'bhavana', subscriptionId:'4', subscriptionStartDate:'5-3-20', subscriptionEndDate:'12-10-0',phoneNo:798745556 },
    { Name:'sita', subscriptionId:'5', subscriptionStartDate:'5-3-20', subscriptionEndDate:'13-10-0',phoneNo:9848080183 },
    
  ]

  constructor() { }
  

  ngOnInit(): void {
    this.users = this.usersList;
    // this.users=[
      
    //   { Name:'murali', subscriptionId:'1', subscriptionStartDate:'22-9-0', subscriptionEndDate:'23-10-0',phoneNo:54545456454 },
    //   { Name:'murali', subscriptionId:'1', subscriptionStartDate:'22-9-0', subscriptionEndDate:'23-10-0',phoneNo:54545456454 },
    //   { Name:'murali', subscriptionId:'1', subscriptionStartDate:'22-9-0', subscriptionEndDate:'23-10-0',phoneNo:54545456454 },
    //   { Name:'murali', subscriptionId:'1', subscriptionStartDate:'22-9-0', subscriptionEndDate:'23-10-0',phoneNo:54545456454 },
    //   { Name:'murali', subscriptionId:'1', subscriptionStartDate:'22-9-0', subscriptionEndDate:'23-10-0',phoneNo:54545456454 },
      
    // ]

  }
  search(){
    
  
     this.users = this.usersList.filter(res => 
       res. Name.toLocaleLowerCase().indexOf(this.firstname.toLocaleLowerCase()) > -1 || 
       res. subscriptionId.toString().toLocaleLowerCase().indexOf(this.firstname.toLocaleLowerCase()) > -1 || 
       res. subscriptionStartDate.toLocaleLowerCase().indexOf(this.firstname.toLocaleLowerCase()) > -1 ||
       res.subscriptionEndDate.toLocaleLowerCase().indexOf(this.firstname.toLocaleLowerCase()) > -1 || 
       res.phoneNo.toString().toLocaleLowerCase().indexOf(this.firstname.toLocaleLowerCase()) > -1
     )
     
    }
  }


