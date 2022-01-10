import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('menuIcon')
  iconoMenu!: ElementRef;
  @ViewChild('menuTablet')
  boxMenu!: ElementRef;

  public showTabletMenu: boolean;

  constructor(private renderer: Renderer2) {
    this.showTabletMenu = false
  }

  ngOnInit(): void {
    this.showTabletMenu = false
  }

  toggleTabletMenu() {
    this.showTabletMenu = !this.showTabletMenu;
  }

}
