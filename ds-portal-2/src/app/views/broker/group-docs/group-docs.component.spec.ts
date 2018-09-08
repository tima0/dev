import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDocsComponent } from './group-docs.component';

describe('GroupDocsComponent', () => {
  let component: GroupDocsComponent;
  let fixture: ComponentFixture<GroupDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
