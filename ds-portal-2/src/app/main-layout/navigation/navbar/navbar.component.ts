
import { Component, Input, ElementRef } from '@angular/core';
import { NavDrops, NavItems } from './data';
import { NavbarService } from './navbar.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NavbarService]
})
export class NavbarComponent {

  navItems: NavItems[];
  navDrops: NavDrops[];
  _breadCrumbs: any;
  _subscription: any;
  @Input() sidenav: ElementRef;

  constructor() {
  }



}
