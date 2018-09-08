import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMemberDetailsDependentsAddComponent } from './group-member-details-dependents-add.component';

describe('GroupMemberDetailsDependentsAddComponent', () => {
  let component: GroupMemberDetailsDependentsAddComponent;
  let fixture: ComponentFixture<GroupMemberDetailsDependentsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMemberDetailsDependentsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMemberDetailsDependentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
