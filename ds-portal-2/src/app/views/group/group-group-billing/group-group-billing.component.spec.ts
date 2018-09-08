import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGroupBillingComponent } from './group-group-billing.component';

describe('GroupGroupBillingComponent', () => {
  let component: GroupGroupBillingComponent;
  let fixture: ComponentFixture<GroupGroupBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupGroupBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupGroupBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
