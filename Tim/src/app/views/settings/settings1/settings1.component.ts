import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-settings1',
  templateUrl: './settings1.component.html',
  styleUrls: ['./settings1.component.scss']
})
export class Settings1Component implements OnInit {

  visible = false;
  constructor() {}

  ngOnInit() {}


  showLoader(event: any) {
    if (event.target.nativeElement.children[0].children[0].classList.contains('check')) {
      this.visible = true;
      window.setTimeout(() => {
        this.visible = false;
      }, 2000);
    }
  }
// tslint:disable-next-line:eofline
}