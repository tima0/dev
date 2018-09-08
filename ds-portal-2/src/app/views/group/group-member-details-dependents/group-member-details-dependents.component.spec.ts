import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMemberDetailsDependentsComponent } from './group-member-details-dependents.component';

describe('GroupMemberDetailsDependentsComponent', () => {
  let component: GroupMemberDetailsDependentsComponent;
  let fixture: ComponentFixture<GroupMemberDetailsDependentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMemberDetailsDependentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMemberDetailsDependentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
