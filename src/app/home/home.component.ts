import { Component, OnInit } from '@angular/core';
import { JSONDATAService } from '../jsondata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  receivedData : Array<any>;
  pageOfItems : Array<any>;
  constructor(private jsonDataService : JSONDATAService) { 
    
  }

  ngOnInit(): void {
  }

  getJsonData(){
    this.jsonDataService.getJsonData().subscribe((data) => {
      this.receivedData = data;
      console.log(this.receivedData);
    })
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}

}
