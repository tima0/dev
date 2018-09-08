import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupResourceCenterComponent } from './group-resource-center.component';

describe('GroupResourceCenterComponent', () => {
  let component: GroupResourceCenterComponent;
  let fixture: ComponentFixture<GroupResourceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupResourceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupResourceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
