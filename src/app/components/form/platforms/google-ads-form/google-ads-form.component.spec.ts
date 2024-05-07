import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAdsFormComponent } from './google-ads-form.component';

describe('GoogleAdsFormComponent', () => {
  let component: GoogleAdsFormComponent;
  let fixture: ComponentFixture<GoogleAdsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleAdsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleAdsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
