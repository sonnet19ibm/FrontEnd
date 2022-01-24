import { Component, OnInit } from '@angular/core';
import { Orderitem } from '../model/orderitemlist';
import { ListOrderItemsService } from '../services/list-order-items.service';

@Component({
  selector: 'app-list-order-items',
  templateUrl: './list-order-items.component.html',
  styleUrls: ['./list-order-items.component.css']
})
export class ListOrderItemsComponent implements OnInit {

  orderitems: Orderitem[]=[];
  constructor(private service:ListOrderItemsService,) { }

  ngOnInit(): void {

    this.getorderData();

  }
  private getorderData(){
    this.service.getOrderItemList().subscribe(data=>this.orderitems=data);
  }
  deleteOrderItemList(id:number){
    
    var ans=confirm("Are you sure you want to delete");
    if(ans)
    this.service.deleteOrderItemList(id).subscribe();
  }

}