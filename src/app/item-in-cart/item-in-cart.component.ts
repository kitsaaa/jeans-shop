import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../Item';

@Component({
  selector: 'app-item-in-cart',
  templateUrl: './item-in-cart.component.html',
  styleUrls: ['./item-in-cart.component.css']
})
export class ItemInCartComponent implements OnInit {
  @Input() item: Item = new Item();

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
  }

  onRemove() {
    this._cartService.removeItem(this.item);
    this._cartService.save();
  

  }
}
