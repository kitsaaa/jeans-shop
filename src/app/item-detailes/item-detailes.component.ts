import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Item } from '../Item';
import { ItemsService } from '../items.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-item-detailes',
  templateUrl: './item-detailes.component.html',
  styleUrls: ['./item-detailes.component.css'],
  animations: [
    trigger('fadeInOutText', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('out => in', animate('0.25s')),
      transition('in => out', animate('0.5s'))
  ])
  ]
})
export class ItemDetailesComponent implements OnInit {

  text = 'Added to cart';
  textState = 'out';
  animateState = false;
  isMenuOpen = false;

  animateText() {
    
    console.log('animated')
    this.textState = 'in';
    
  }
  animateTextOut() {
    this.textState = "out";
  }

  item: Item = new Item();
  status: any;
  finished: any;

  constructor(private _itemsService: ItemsService, private route: ActivatedRoute, private _cartService: CartService, private _menuService: MenuService) { }

  ngOnInit(): void {

    this._menuService.getValue().subscribe(val => {
      this.isMenuOpen = val;
    })

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
    this.finished = false;
    this._cartService.addItem(this.item);
    this._cartService.save();
    this.status = "Added to cart succesfully"
    this.animateState = true;
    this.animateText();
    setTimeout(() => {
      this.animateTextOut();
    }, 475)

    // if (this.textState == "in")
    //   this.animateTextOut();


    
    
    // this.animateTextOut();
    // setTimeout(() => {
    //   this.animateTextOut();
    // }, 4000)
    
  }

}
