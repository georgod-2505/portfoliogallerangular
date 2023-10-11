import { Component } from '@angular/core';
import { OrderList } from './orders-data/mock-orders';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders = OrderList;
}
