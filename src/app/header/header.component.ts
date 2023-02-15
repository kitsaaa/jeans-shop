import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  isMenuOpen = false;
  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this._menuService.setValue(this.isMenuOpen);
  }

}
