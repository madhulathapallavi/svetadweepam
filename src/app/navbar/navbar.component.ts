import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataservice';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dataService:DataService) { }

 
  ngOnInit(): void {
    
  }

}
