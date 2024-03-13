import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { NgForm } from '@angular/forms';
import { HeaderComponent } from '../shared-module/header/header.component';
import { Interface } from 'readline';
import { TestHomeComponent } from './test-home/test-home.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css',
})
export class DashBoardComponent {
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
