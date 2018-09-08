import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentAddMemberComponent } from './enrollment-add-member.component';

describe('EnrollmentAddMemberComponent', () => {
  let component: EnrollmentAddMemberComponent;
  let fixture: ComponentFixture<EnrollmentAddMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentAddMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentAddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
