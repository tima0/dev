import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailsEditComponent } from './group-details-edit.component';

describe('GroupDetailsEditComponent', () => {
  let component: GroupDetailsEditComponent;
  let fixture: ComponentFixture<GroupDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
