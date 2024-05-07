import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingFormComponent } from './bing-form.component';

describe('BingFormComponent', () => {
  let component: BingFormComponent;
  let fixture: ComponentFixture<BingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BingFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
