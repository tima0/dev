import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailsDependentsComponent } from './member-details-dependents.component';

describe('MemberDetailsDependentsComponent', () => {
  let component: MemberDetailsDependentsComponent;
  let fixture: ComponentFixture<MemberDetailsDependentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDetailsDependentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailsDependentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
