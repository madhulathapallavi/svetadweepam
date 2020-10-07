import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


export interface CustomServerResponseObject { success: boolean; msg: string, data: any; error: any; }

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient, private router: Router) { }

  GetHeaders() {
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    // if (localStorage.getItem('token')) {
    //   const token = localStorage.getItem('token');
    //   headers = headers.append('authorization', token);
    // }
    const options = {
      headers : headers
    } ;
    return options;
  }

  GetHeadersForFormData() {
    var headers: HttpHeaders = new HttpHeaders();
    // headers.append('Content-Type', 'application/formdata');
    // if (localStorage.getItem('token')) {
    //   const token = localStorage.getItem('token');
    //   headers = headers.append('authorization', token);
    // }
    const options = {
      headers : headers
    } ;
    return options;
  }

  GetHeadersForDownloadFile() {
    var headers: HttpHeaders = new HttpHeaders();
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      headers = headers.append('authorization', token);
    }
    const options = {
      headers : headers
    } ;
    return options;
  }

  ResponseMap(res: Response) {
    const response: Promise<CustomServerResponseObject> = res.json();

    response.then(  response => {
      if (response && response.hasOwnProperty('success')) {
        if (response.error && response.error === 'Failed to authenticate token.') {
          localStorage.removeItem('token');
          // this.router.navigate(['/logout']);
          window.location.reload();
        }
        return response;
      } else {
        return {
          success: false,
          data: null,
          error: response,
          msg:""
        };
      }
    }).catch(error=>{
      return {
        success: false,
        data: null,
        error: response,
        msg:""
      };
    })
  }

  GetRequest(url: string): Observable<CustomServerResponseObject> {
    return this._http.get<CustomServerResponseObject>(url, this.GetHeaders());
  }
  PostRequest(url: string, obj: Object): Observable<CustomServerResponseObject> {
    return this._http.post<CustomServerResponseObject>(url, obj, this.GetHeaders());
  }
  PutRequest(url: string, obj: Object): Observable<CustomServerResponseObject> {
    return this._http.put<CustomServerResponseObject>(url, obj, this.GetHeaders());
  }
  DeleteRequest(url: string): Observable<CustomServerResponseObject> {
    return this._http.delete<CustomServerResponseObject>(url, this.GetHeaders());
  }
  PostRequestForUploads(url: string, obj: any): Observable<CustomServerResponseObject> {
    return this._http.post<CustomServerResponseObject>(url, obj, this.GetHeadersForFormData());
  }
 
}
