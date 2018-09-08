import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEnrollmentTerminateMemberComponent } from './group-enrollment-terminate-member.component';

describe('GroupEnrollmentTerminateMemberComponent', () => {
  let component: GroupEnrollmentTerminateMemberComponent;
  let fixture: ComponentFixture<GroupEnrollmentTerminateMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEnrollmentTerminateMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEnrollmentTerminateMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
