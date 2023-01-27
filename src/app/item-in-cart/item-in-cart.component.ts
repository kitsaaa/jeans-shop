import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../Item';

@Component({
  selector: 'app-item-in-cart',
  templateUrl: './item-in-cart.component.html',
  styleUrls: ['./item-in-cart.component.css']
})
export class ItemInCartComponent implements OnInit {
  @Input() item: Item = new Item();
  @Input() totalPrice: any;
  @Output() priceChanged = new EventEmitter<number>();

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
  }

  updatePrice(newPrice: number) {
    this.totalPrice = newPrice;
    this.priceChanged.emit(this.totalPrice);
  }

  onRemove() {
    this.updatePrice(this.totalPrice -= Number(this.item.price))
    this._cartService.removeItem(this.item);
    this._cartService.save();

  }
}
