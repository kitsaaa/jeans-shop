import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any[] = [];
  totalPrice = 0;


  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.load();
    this.items = this._cartService.items;
    this.totalPrice = this._cartService.totalPrice;
    
  }




}
