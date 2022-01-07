import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showTabletMenu:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTabletMenu(){
    this.showTabletMenu = !this.showTabletMenu;
  }

}
