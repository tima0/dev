import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderClaimsComponent } from './provider-claims.component';

describe('ProviderClaimsComponent', () => {
  let component: ProviderClaimsComponent;
  let fixture: ComponentFixture<ProviderClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
