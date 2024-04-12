import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacingAlertsComponent } from './pacing-alerts.component';

describe('AlertsComponent', () => {
  let component: PacingAlertsComponent;
  let fixture: ComponentFixture<PacingAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacingAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacingAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
