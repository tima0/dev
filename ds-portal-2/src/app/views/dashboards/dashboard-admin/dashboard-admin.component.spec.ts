import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {DashboardAdminComponent} from './dashboard-admin.component';
import { StatsCardComponent } from '../common/stats-card/stats-card.component';

describe('AdminDashboardComponent', () => {
  let component: DashboardAdminComponent;
  let fixture: ComponentFixture< DashboardAdminComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardAdminComponent,
        StatsCardComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
