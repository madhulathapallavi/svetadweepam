import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  year = 2016
  yearlist = [];
  //   {year:"2020",
  //     month:[
  //       { month:["jan","feb","march","april","may","jun","july","aug","sep","oct","nov","dec"]}
  //     ]
  //   },
  //   {year:"2019",
  //     month:[
  //       { month:["jan","feb","march","april","may","jun","july","aug","sep","oct","nov","dec"]}
  //     ]
  //   },
  //   {year:"2018",
  //     month:[
  //       { month:["jan","feb","march","april","may","jun","july","aug","sep","oct","nov","dec"]}
  //     ]
  //   },

  // ]
  months = [
          { month:["jan","feb","march","april","may","jun","july","aug","sep","oct","nov","dec"]}
        ]

  constructor() { }

  ngOnInit(): void {

    var currentdate = Number(((new Date()).getFullYear()));

    for (let index = this.year; index <= currentdate; index++) {
      this.yearlist.push(
        {
          year: index,
          month: this.months
        }
      )

    }
    console.log(this.yearlist)

  }


}
