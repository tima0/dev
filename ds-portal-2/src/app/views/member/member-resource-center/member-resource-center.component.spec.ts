import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberResourceCenterComponent } from './member-resource-center.component';

describe('MemberResourceCenterComponent', () => {
  let component: MemberResourceCenterComponent;
  let fixture: ComponentFixture<MemberResourceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberResourceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberResourceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
