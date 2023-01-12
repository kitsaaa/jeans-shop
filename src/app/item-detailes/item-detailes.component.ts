import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Item } from '../Item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-detailes',
  templateUrl: './item-detailes.component.html',
  styleUrls: ['./item-detailes.component.css']
})
export class ItemDetailesComponent implements OnInit {

  item: Item = new Item();

  constructor(private _itemsService: ItemsService, private route: ActivatedRoute, private _cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      console.log(params['id']);
      this._itemsService.getPostById(params['id']).subscribe(data => {
        this.item = data;
        console.log(data);
      })
     }) 
  }

  cartBtnClicked() {
    this._cartService.addItem(this.item);
    this._cartService.save();
  }

}
