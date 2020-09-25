import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
// import { AuthService } from '../auth/auth.service';




export interface CustomServerResponseObject { success: boolean; msg: string, data: any; error: any; }

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient, private router: Router) { }
}