import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dv360FormComponent } from './dv360-form.component';

describe('Dv360FormComponent', () => {
  let component: Dv360FormComponent;
  let fixture: ComponentFixture<Dv360FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dv360FormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dv360FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
