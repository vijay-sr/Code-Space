import { Component,OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { NgForm, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  title = 'pathFinder';
  productArray=[];
  constructor(private getApi:ApiCallService) {}
  ngOnInit(){
  this.getApi.getPost().subscribe((res)=>{
    this.productArray=res;
    console.log(res);
  })
}
onSubmit(form: NgForm) {
  console.log("your form data : " , form.value);
  
}
}
 