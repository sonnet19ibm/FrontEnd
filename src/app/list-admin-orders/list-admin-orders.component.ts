import { Component, OnInit } from '@angular/core';
import { Adminorders } from '../model/adminorders';
import { ListAdminOrdersService } from '../services/list-admin-orders.service';

@Component({
  selector: 'app-list-admin-orders',
  templateUrl: './list-admin-orders.component.html',
  styleUrls: ['./list-admin-orders.component.css']
})
export class ListAdminOrdersComponent implements OnInit {

  orders:Adminorders[]=[];
  constructor(private service:ListAdminOrdersService) { }

  ngOnInit(): void {
    this.getorderData();
  }

  private getorderData(){
    this.service.getOrderItemList().subscribe(data=>this.orders=data);
  }
  deleteOrderItemList(id:number){
    
    var ans=confirm("Are you sure you want to delete");
    if(ans)
    this.service.deleteOrderItemList(id).subscribe();
  }
}
