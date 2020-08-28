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
      
    { Name:'murali', subscriptionId:'1', subscriptionStartDate:'22-9-0', subscriptionEndDate:'9-10-20',phoneNo:54545456454 },
    { Name:'murali', subscriptionId:'1', subscriptionStartDate:'22-9-0', subscriptionEndDate:'10-10-0',phoneNo:54545456454 },
    { Name:'murali', subscriptionId:'1', subscriptionStartDate:'22-9-0', subscriptionEndDate:'10-10-0',phoneNo:54545456454 },
    { Name:'murali', subscriptionId:'1', subscriptionStartDate:'22-9-0', subscriptionEndDate:'12-10-0',phoneNo:54545456454 },
    { Name:'sita', subscriptionId:'1', subscriptionStartDate:'4-1-2019', subscriptionEndDate:'13-10-0',phoneNo:54545456454 },
    
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
    debugger
  
     this.users = this.usersList.filter(res => 
       res.subscriptionEndDate.toLocaleLowerCase().indexOf(this.firstname.toLocaleLowerCase()) > -1 
     )
    }
  }


