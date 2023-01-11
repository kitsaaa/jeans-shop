import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  // item: any = {
  //   img: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/231669M147000_1/vetements-silver-thin-nut-ring.jpg",
  //   title: "Ring",
  //   price: "299"
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
