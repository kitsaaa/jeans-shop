import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.css']
})
export class TotalPriceComponent implements OnInit {

  @Input() totalPrice: any;

  constructor() { }

  ngOnInit(): void {
  }

}
