import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isMenuOpen = new BehaviorSubject<boolean>(false);
  constructor() { }
  getValue() {
    return this.isMenuOpen.asObservable();
  }

  setValue(val: boolean) {
    this.isMenuOpen.next(val);
  }
}
