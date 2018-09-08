import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-dashboard-broker',
  templateUrl: './dashboard-broker.component.html',
  styleUrls: ['./dashboard-broker.component.scss']
})
export class DashboardBrokerComponent implements OnInit {

  dental: any;
  vision: any;
  total: any;
@Input() shadows = true;

premium = [
  this.total,
  this.dental,
  this.vision

];

constructor() {

}

ngOnInit() {
}

}
