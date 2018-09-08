import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGroupAdminComponent } from './register-group-admin.component';

describe('RegisterGroupAdminComponent', () => {
  let component: RegisterGroupAdminComponent;
  let fixture: ComponentFixture<RegisterGroupAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGroupAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGroupAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
