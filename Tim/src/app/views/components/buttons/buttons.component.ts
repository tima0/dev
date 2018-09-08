import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  public radioModel: string = 'Left';
  public checkModel: any = { left: true, middle: false, right: false };

  constructor() { }

  ngOnInit() {
  }

}
