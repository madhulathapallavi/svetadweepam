import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent implements OnInit {
  users =  [
    {
        'name': 'Xyz',
        'subscriptionId':'123',
        'subscriptionStartDate':'123',
        'subscriptionEndDate':'123',
        'phoneNo':'1234567890'
    },
    {
        'name': 'Abc',
        'subscriptionId':'456',
        'subscriptionStartDate':'456',
        'subscriptionEndDate':'456',
        'phoneNo':'9999999999'
  },
  {
        'name': 'Xyz',
        'subscriptionId':'123',
        'subscriptionStartDate':'123',
        'subscriptionEndDate':'123',
        'phoneNo':'1234567890'
  },
    {
        'name': 'Abc',
        'subscriptionId':'456',
        'subscriptionStartDate':'456',
        'subscriptionEndDate':'456',
        'phoneNo':'9999999999'
    },
    {
      'name': 'Xyz',
        'subscriptionId':'123',
        'subscriptionStartDate':'123',
        'subscriptionEndDate':'123',
        'phoneNo':'1234567890'
    },
    {
      'name': 'Abc',
        'subscriptionId':'456',
        'subscriptionStartDate':'456',
        'subscriptionEndDate':'456',
        'phoneNo':'9999999999'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
