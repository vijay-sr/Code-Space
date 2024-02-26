import { Component, signal } from '@angular/core';
import { ApiCallService } from '../../api-call.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productArray=[];
  constructor(private getApi:ApiCallService) {}
  ngOnInit(){
    this.getApi.getPost().subscribe((res) => {
    this.productArray=res;
  })
}

customerList=([
  
  {id:1, title:'restaurent',
    items:[
    {id:1, name:'Anandha Bhavan'},
    {id:2, name:'Arya Bhavan'},
    {id:3, name:'Irani'},
    {id:3, name:'Irani'},
    ]
  },

  {id:2, title:'Destination',
  items:[
    {id:1, name:'Ponmudi Hills'},
    {id:2, name:'Munnar'},
    {id:3, name:'Kodaikanal'},
    {id:4, name:'Ooty'},
    {id:5, name:'wayyanad'},
    {id:6, name:'varkala'},
    {id:7, name:'Thenmala'},
    ]},
  {id:3, title:'Hotels',
  items:[
    {id:1, name:'Taj By Vivanta'},
    {id:2, name:'Leela'},
    {id:3, name:'Maurya Rajadhani'},
    {id:4, name:'Ravis'},
    {id:5, name:'Hotel Hill View'},
    {id:6, name:'KTDC Ponmudi Hill Palace'},
    ]},
  {id:4, title:'HealthCare',
  items:[
    {id:1, name:'KIMS'},
    {id:2, name:'NIMS'},
    {id:3, name:'AIMS Medicity'},
    ]},
  {id:5, title:'Automation',
  items:[
    {id:1, name:'ROOTS'},
    {id:2, name:'AI Dynamics'},
    ]},
])


}
