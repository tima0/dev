import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-renewals',
  templateUrl: './renewals.component.html',
  styleUrls: ['./renewals.component.scss']
})
export class RenewalsComponent implements OnInit {
  @Input() shadows = true;

  tableData: object[] = [{
    groupName: 'Rocky MH',
    groupId: Number,
    status: Boolean,
    subs: Number,
    effective: Date(),
    renewal: Date(),
    letter: '../../../../assets/img/favicon-32x32.png'
  }, {
    groupName: 'Select Benefits',
    groupId: Number,
    status: Boolean,
    subs: Number,
    effective: Date(),
    renewal: Date(),
    letter: '../../../../assets/img/favicon-32x32.png'
  }, {
    groupName: 'Macrosoft',
    groupId: Number,
    status: Boolean,
    subs: Number,
    effective: Date(),
    renewal: Date(),
    letter: '../../../../assets/img/favicon-32x32.png'
  }, {
    groupName: 'Donno Software',
    groupId: Number,
    status: Boolean,
    subs: Number,
    effective: Date(),
    renewal: Date(),
    letter: '../../../../assets/img/favicon-32x32.png'
  }, {
    groupName: 'MLM Inc',
    groupId: Number,
    status: Boolean,
    subs: Number,
    effective: Date(),
    renewal: Date(),
    letter: '../../../../assets/img/favicon-32x32.png'
  }];

  filterOptionsSelect: object[] = [
    { value: '1', label: '30 Days' },
    { value: '2', label: '60 Days' },
    { value: '3', label: '90 Days' },
    { value: '4', label: '120+ Days' }
  ];

  dateOptionsSelect: object[] = [{
    value: '1',
    label: 'Today'
  }, {
    value: '2',
    label: 'Yesterday'
  }, {
    value: '3',
    label: 'Last 7 days'
  }, {
    value: '4',
    label: 'Last 30 days'
  }, {
    value: '5',
    label: 'Last week'
  }, {
    value: '6',
    label: 'Last month'
  }];

  bulkOptionsSelect: object[] = [{
    value: '1',
    label: 'Delete'
  }, {
    value: '2',
    label: 'Export'
  }, {
    value: '3',
    label: 'Change segment'
  }];

  showOnlyOptionsSelect: object[] = [{
    value: '1',
    label: 'All (2000)'
  }, {
    value: '2',
    label: 'Never opened (200)'
  }, {
    value: '3',
    label: 'Opened but unanswered (1800)'
  }, {
    value: '4',
    label: 'Answered (200)'
  }, {
    value: '5',
    label: 'Unsunscribed (50)'
  }];

  private sorted = false;

  constructor() { }

  ngOnInit() { }

  sortBy(by: string | any): void {

    this
      .tableData
      .sort((a: any, b: any) => {
        if (a[by] < b[by]) {
          return this.sorted ?
            1 :
            -1;
        }
        if (a[by] > b[by]) {
          return this.sorted ?
            -1 :
            1;
        }

        return 0;
      });

    this.sorted = !this.sorted;
  }
}
