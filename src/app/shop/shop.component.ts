import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: any;

  constructor(private _itemsService: ItemsService) { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this._itemsService.getPosts(1).subscribe(data => {
        this.items = data;
        console.log(data)
      })
    }
    
  }

}
