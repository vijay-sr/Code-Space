import { Component,OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { NgForm, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestHomeComponent } from './dash-board/test-home/test-home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

onSubmit(form: NgForm) {
  console.log("your form data : " , form.value);
}
}
  