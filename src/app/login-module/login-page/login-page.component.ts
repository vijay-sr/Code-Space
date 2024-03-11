import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private service: UserService, private router: Router ) {}
  respdata:any;

proceedLogin(logindata:any) {
  if(logindata.valid) {
    this.service.proceedLogin(logindata.value).subscribe(item =>{
      this.respdata=item;
      if(this.respdata!=null){
        localStorage.setItem('token', this.respdata.jwtToken);
        this.router.navigate (['/home']);
      }else {
        alert("Login Failed")
      }
      console.log(this.respdata);
    })
  } 
  // console.log(logindata.valid);
  // console.log(logindata.value);
  // console.log(logindata);
}
directSignup() {
  this.router.navigate([''])
}

}
