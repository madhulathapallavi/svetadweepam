import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-magazine-uploader',
  templateUrl: './magazine-uploader.component.html',
  styleUrls: ['./magazine-uploader.component.css']
})
export class MagazineUploaderComponent implements OnInit {

  yearsList: any = [];
  monthsList: any = [];

  yearBind;
  monthBind;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.loadData();

  }

  loadData(){

    this.getYears();
    this.getMonths();
  }


  getYears(){

    this.auth.getYears().then(data =>{
      console.log(data);
      this.yearsList = data;
    }).catch(error =>{
      console.log(error);
    })

  }


  getMonths(){
    this.auth.getMonths().then(data =>{
      console.log(data);
      this.monthsList = data;
    }).catch(error =>{
      console.log(error);
    })
  }



  importFile(event) {
   
    if (event.target.files.length == 0) {
     
      console.log("No file selected!");
      return;
    }
 
       var fileToUpload = event.target.files[0];
    var filename = event.target.files[0].name;
    const formData: FormData = new FormData();
    console.log("final file name: ", filename);
    formData.append("selectedfile", fileToUpload, filename);
    formData.append("year",this.yearBind);
    formData.append("month",this.monthBind);


    this.auth.uploadMagazine(formData).then( data =>{
      console.log(data);
    }).catch(error =>{
      console.log(error);
    })
  
  }

  removeMonth(){

  }

}
