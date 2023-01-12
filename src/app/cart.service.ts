import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: any[] = [];
  totalPrice = 0;

  constructor() {}

  addItem(item: Item) {
      this.items.push(item);
      console.log(this.items)
      this.totalPrice += Number(item.price);
  }

  removeItem(item: Item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
          this.items.splice(index, 1);
          this.totalPrice -= Number(item.price);
      }
  }

  clearCart(){
      this.items = [];
      this.totalPrice = 0;
  }

  save(){
      localStorage.setItem('cart', JSON.stringify(this));
  }

  load(){
      const cart = JSON.parse(localStorage.getItem('cart')|| '{}');
      if(cart){
          this.items = cart.items;
          this.totalPrice = cart.totalPrice;
      }
  }
}
