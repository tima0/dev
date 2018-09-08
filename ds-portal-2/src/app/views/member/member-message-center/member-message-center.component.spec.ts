import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMessageCenterComponent } from './member-message-center.component';

describe('MemberMessageCenterComponent', () => {
  let component: MemberMessageCenterComponent;
  let fixture: ComponentFixture<MemberMessageCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMessageCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMessageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
