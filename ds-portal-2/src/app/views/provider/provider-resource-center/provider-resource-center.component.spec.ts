import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderResourceCenterComponent } from './provider-resource-center.component';

describe('ProviderResourceCenterComponent', () => {
  let component: ProviderResourceCenterComponent;
  let fixture: ComponentFixture<ProviderResourceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderResourceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderResourceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
