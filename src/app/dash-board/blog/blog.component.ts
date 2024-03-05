import { Component } from '@angular/core';
import { ApiCallService } from '../../api-call.service';
import { log } from 'console';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  productArray =[]
  constructor(private getApi:ApiCallService) {}
  ngOnInit(){
    this.getApi.getPost().subscribe((resp) => {
    this.productArray=resp;
    console.log(resp);
    
  })
}

}
