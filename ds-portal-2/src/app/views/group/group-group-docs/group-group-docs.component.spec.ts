import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGroupDocsComponent } from './group-group-docs.component';

describe('GroupGroupDocsComponent', () => {
  let component: GroupGroupDocsComponent;
  let fixture: ComponentFixture<GroupGroupDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupGroupDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupGroupDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
