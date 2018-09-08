import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMemberDetailsPlansComponent } from './group-member-details-plans.component';

describe('GroupMemberDetailsPlansComponent', () => {
  let component: GroupMemberDetailsPlansComponent;
  let fixture: ComponentFixture<GroupMemberDetailsPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMemberDetailsPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMemberDetailsPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
