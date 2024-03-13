import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  proceedLogin(inputdata:any) {
      // return this.http.post(' https://virtserver.swaggerhub.com/venkatesan.e/authenticateUsers/1.0.0/authenticateUsers', inputdata)
      return this.http.get('https://petstore.swagger.io/v2/user/login?username=adminuser&password=admin', inputdata)
    }

  }

