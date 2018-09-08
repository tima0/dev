import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBrokerComponent } from './register-broker.component';

describe('RegisterBrokerComponent', () => {
  let component: RegisterBrokerComponent;
  let fixture: ComponentFixture<RegisterBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
