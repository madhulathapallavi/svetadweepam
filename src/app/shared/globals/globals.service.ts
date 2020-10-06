import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

export const Servers =  {
    apiserver:'http://localhost:3000/',

}
@Injectable()
export class Globals {
  constructor()
  {
    // if (environment.production) {
    //   Servers.apiserver = 'http://35.200.205.38:3000/api/v1';
    // }
    // else {
    //   Servers.apiserver = 'http://localhost:3000/';
  
    // }
  }
}