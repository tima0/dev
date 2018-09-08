import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDentistComponent } from './register-dentist.component';

describe('RegisterDentistComponent', () => {
  let component: RegisterDentistComponent;
  let fixture: ComponentFixture<RegisterDentistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDentistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
