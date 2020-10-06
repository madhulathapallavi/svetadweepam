import { Servers } from '../../shared/globals/globals.service';

export const base = Servers.apiserver;

export  const api ={

    apiserver: 'http://localhost:3000',

    uploadFile: base+ 'userdetails/fileupload',
    getyears: base+ 'userdetails/getyears',
    getmonths: base+ 'userdetails/getmonths',

}