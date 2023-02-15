import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any[] = [];
  totalPrice = 0;
  isMenuOpen = false;

  constructor(private _cartService: CartService, private _menuService: MenuService) { }

  ngOnInit(): void {
    this._menuService.getValue().subscribe(val => {
      this.isMenuOpen = val;
    })
    this._cartService.load();
    this.items = this._cartService.items;
    this.totalPrice = this._cartService.totalPrice;
    
  }




}
