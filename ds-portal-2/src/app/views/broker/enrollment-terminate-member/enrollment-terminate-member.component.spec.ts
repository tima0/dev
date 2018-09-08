import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentTerminateMemberComponent } from './enrollment-terminate-member.component';

describe('EnrollmentTerminateMemberComponent', () => {
  let component: EnrollmentTerminateMemberComponent;
  let fixture: ComponentFixture<EnrollmentTerminateMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentTerminateMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentTerminateMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
