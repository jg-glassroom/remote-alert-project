import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacingTemplateComponent } from './pacing-template.component';

describe('PacingTemplateComponent', () => {
  let component: PacingTemplateComponent;
  let fixture: ComponentFixture<PacingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacingTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
