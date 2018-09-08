import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailsDependentsAddComponent } from './member-details-dependents-add.component';

describe('MemberDetailsDependentsAddComponent', () => {
  let component: MemberDetailsDependentsAddComponent;
  let fixture: ComponentFixture<MemberDetailsDependentsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDetailsDependentsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailsDependentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
