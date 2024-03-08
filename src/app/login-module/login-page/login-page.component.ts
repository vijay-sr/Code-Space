import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiCallService } from '../../api-call.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private getApi:ApiCallService) {}
  respdata=[];
// respdata:any
proceedLogin(logindata:any) {
  // if(logindata.valid) {
  //   this.proceedLogin(logindata.value).subscribe((item)=>{
  //     this.respdata=item;
  //     console.log(this.respdata);
  //   })
  // }
  console.log(logindata.valid);
  console.log(logindata.value);
  console.log(logindata);
}

}
