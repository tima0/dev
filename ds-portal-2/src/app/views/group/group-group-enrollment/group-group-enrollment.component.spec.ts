import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGroupEnrollmentComponent } from './group-group-enrollment.component';

describe('GroupGroupEnrollmentComponent', () => {
  let component: GroupGroupEnrollmentComponent;
  let fixture: ComponentFixture<GroupGroupEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupGroupEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupGroupEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
