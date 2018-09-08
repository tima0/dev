import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGroupPlansComponent } from './group-group-plans.component';

describe('GroupGroupPlansComponent', () => {
  let component: GroupGroupPlansComponent;
  let fixture: ComponentFixture<GroupGroupPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupGroupPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupGroupPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
