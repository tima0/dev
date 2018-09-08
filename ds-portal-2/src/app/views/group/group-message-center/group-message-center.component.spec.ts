import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMessageCenterComponent } from './group-message-center.component';

describe('GroupMessageCenterComponent', () => {
  let component: GroupMessageCenterComponent;
  let fixture: ComponentFixture<GroupMessageCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMessageCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMessageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
