import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEnrollmentAddMemberComponent } from './group-enrollment-add-member.component';

describe('GroupEnrollmentAddMemberComponent', () => {
  let component: GroupEnrollmentAddMemberComponent;
  let fixture: ComponentFixture<GroupEnrollmentAddMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEnrollmentAddMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEnrollmentAddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
