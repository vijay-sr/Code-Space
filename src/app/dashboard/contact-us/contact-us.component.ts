import { Component, NgModule, signal } from '@angular/core';
import { FormBuilder, NgForm, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
  exportAs: 'ngForm'
})


export class ContactUsComponent {
  constructor(private formBuilder: FormBuilder) {}
  onSubmit(form: NgForm) {
    console.log("your form data : " , form.value);
  }

  modulename='customer'
  onchange(event:any) {
    this.modulename=event.target.value
  }
  customerlist=signal([
    {id:1, brand:'samsung', model:'s24ulttra'},
    {id:2, brand:'iPhone', model:'13 pro'},
    {id:3, brand:'Xioami', model:'note 13 ultra'},
    {id:4, brand:'Nothing', model:'phone3'},
  ])
  supplierlist=signal([
    {id:1, brand:'samsung', model:'s24ulttra' , price:'120000/-'},
    {id:2, brand:'iPhone', model:'13 pro', price:'70000/-'},
    {id:3, brand:'Xioami', model:'note 13 ultra', price:'74000/-'},
    {id:4, brand:'Nothing', model:'phone3', price:'42000/-'},
  ])
  userlist=signal([
    {id:1, brand:'amazon',},
    {id:2, brand:'myntra',},
    {id:3, brand:'flipkart',},
  ])


}

