import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailsPlansComponent } from './member-details-plans.component';

describe('MemberDetailsPlansComponent', () => {
  let component: MemberDetailsPlansComponent;
  let fixture: ComponentFixture<MemberDetailsPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDetailsPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailsPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
