import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIdpComponent } from './manage-idp.component';

describe('ManageIdpComponent', () => {
  let component: ManageIdpComponent;
  let fixture: ComponentFixture<ManageIdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageIdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
