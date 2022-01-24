import { Component, OnInit } from '@angular/core';
import { Address } from '../model/deleteaddress';

import { DeleteserviceService } from '../services/deleteservice.service';

@Component({
  selector: 'app-deleteaddress',
  templateUrl: './deleteaddress.component.html',
  styleUrls: ['./deleteaddress.component.css']
})
export class DeleteaddressComponent implements OnInit {
 
  address:Address[]=[];
  constructor(private service:DeleteserviceService) { }

  ngOnInit(): void {
    this.getAddress();
  }

  private getAddress(){
    this.service.getAddressList().subscribe(data=>this.address=data);
  }
  deleteAddress(aid:number){
    
    var ans=confirm("Are you sure you want to delete");
    if(ans)
    this.service.deleteAddress(aid).subscribe();
  }


}