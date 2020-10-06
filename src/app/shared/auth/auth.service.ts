import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {api} from '../../shared/services/api.service';
import {HttpService} from '../../shared/services/http.service';

@Injectable()
export class AuthService {

    constructor(private http: HttpService) { }

uploadMagazine(input){
    return new Promise<any>((resolve, reject) => {
        this.http.PostRequestForUploads(api.uploadFile, input).subscribe(res => {
          if (res.success) {
            resolve(res.data);
          }
          else {
           
            resolve(null);
          }
        }, err => {
         
          resolve(null);
        })
      });
}

getYears(){
  return new Promise<any>((resolve, reject) => {
    this.http.GetRequest(api.getyears).subscribe(res => {
      if (res.success) {
        resolve(res.data);
      }
      else {
        reject(null);
      }
    }, err => {
      reject(null);
    })
  });
}

getMonths(){
  return new Promise<any>((resolve, reject) => {
    this.http.GetRequest(api.getmonths).subscribe(res => {
      if (res.success) {
        resolve(res.data);
      }
      else {
        reject(null);
      }
    }, err => {
      reject(null);
    })
  });
}







}
