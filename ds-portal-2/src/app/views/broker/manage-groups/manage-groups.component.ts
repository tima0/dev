import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.scss']
})
export class ManageGroupsComponent implements OnInit {
  @Input() shadows = true;

  tableData: object[] = [{
    groupName: 'Rocky MH',
    groupId: Number,
    status: Boolean,
    subs: Number,
    effective: Date(),
    renewal: Date(),
    termDate: Date()
  }, {
      groupName: 'Select Benefits',
      groupId: Number,
      status: Boolean,
      subs: Number,
      effective: Date(),
      renewal: Date(),
      termDate: Date()
  }, {
      groupName: 'Macrosoft',
      groupId: Number,
      status: Boolean,
      subs: Number,
      effective: Date(),
      renewal: Date(),
      termDate: Date()
  }, {
      groupName: 'Donno Software',
      groupId: Number,
      status: Boolean,
      subs: Number,
      effective: Date(),
      renewal: Date(),
      termDate: Date()
  }, {
      groupName: 'MLM Inc',
      groupId: Number,
      status: Boolean,
      subs: Number,
      effective: Date(),
      renewal: Date(),
      termDate: Date()
  }];

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

  filterOptionsSelect: object[] = [{
    value: '1',
    label: 'Contacts in no segments (100)'
  }, {
    value: '2',
    label: 'Segment 1  (2000)'
  }, {
    value: '3',
    label: 'Segment 2  (1000)'
  }, {
    value: '4',
    label: 'Segment 3  (4000)'
  }];

  private sorted = false;

  constructor() {}

  ngOnInit() {}

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
