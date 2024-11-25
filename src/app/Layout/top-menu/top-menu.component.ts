import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {

  dropdown = false;

  toggleDropdown(){
    this.dropdown = !this.dropdown;
  }

}
