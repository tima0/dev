import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMemberDetailsDependentsEditComponent } from './group-member-details-dependents-edit.component';

describe('GroupMemberDetailsDependentsEditComponent', () => {
  let component: GroupMemberDetailsDependentsEditComponent;
  let fixture: ComponentFixture<GroupMemberDetailsDependentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMemberDetailsDependentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMemberDetailsDependentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
