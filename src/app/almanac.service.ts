import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as io from "socket.io-client";

@Injectable()
export class AlmanacService {
  private authToken;
  socket = io('http://192.168.0.10:3030');

  constructor(private http:Http){}

  setToken(token){
    this.authToken = token;
  }

  getUserEntries(){
    var headers = new Headers();
    headers.append('x-auth', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', "*");
    headers.append('Access-Control-Allow-Credentials', 'true');
    var option = new RequestOptions({headers});
    return this.http.get('http://192.168.0.10:3030/entries', option);
  }
}
