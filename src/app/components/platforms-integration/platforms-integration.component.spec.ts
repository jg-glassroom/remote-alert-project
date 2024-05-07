import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsIntegrationComponent } from './platforms-integration.component';

describe('PlatformsIntegrationComponent', () => {
  let component: PlatformsIntegrationComponent;
  let fixture: ComponentFixture<PlatformsIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformsIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformsIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
