import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGroupDetailsComponent } from './group-group-details.component';

describe('GroupGroupDetailsComponent', () => {
  let component: GroupGroupDetailsComponent;
  let fixture: ComponentFixture<GroupGroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupGroupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
