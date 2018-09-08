import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailsDependentsEditComponent } from './member-details-dependents-edit.component';

describe('MemberDetailsDependentsEditComponent', () => {
  let component: MemberDetailsDependentsEditComponent;
  let fixture: ComponentFixture<MemberDetailsDependentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDetailsDependentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailsDependentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
