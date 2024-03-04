import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ApiCallService } from '../../api-call.service';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  productArray=[];
  constructor(private getApi:ApiCallService) {}
  ngOnInit(){
    this.getApi.getPost().subscribe((res) => {
    this.productArray=res;
    console.log(res);
  })
}

}

