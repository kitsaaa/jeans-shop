import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: any;
  canDisplayData: any;

  constructor(private _itemsService: ItemsService) { }

  ngOnInit() {
    // this.val = "none";
    this.canDisplayData = false;

    this._itemsService.getPosts(1).subscribe(data => {
      this.items = data;
      console.log(data);
    }) 

    // while (this.items.message) {
    //   this.items = this._itemsService.getPosts(1);
    // }
    if (this.items) {
      this.canDisplayData = true;
    }
    

    // this._itemsService.getPosts(1)(data => {
    //   setTimeout(() => {
    //     this.items = data;
    //     console.log(data)
    //     this.canDisplayData = true;
    //   }, 1000);

    // })
    
  }

}
