import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGroupComponent } from './dashboard-group.component';
import { StatsCardComponent } from '../common/stats-card/stats-card.component';
import { SharedModule } from '../../../shared/shared.module';

describe('Dashboard3Component', () => {
  let component: DashboardGroupComponent;
  let fixture: ComponentFixture<DashboardGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        DashboardGroupComponent,
        StatsCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
