import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinFormComponent } from './linkedin-form.component';

describe('LinkedinFormComponent', () => {
  let component: LinkedinFormComponent;
  let fixture: ComponentFixture<LinkedinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedinFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkedinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
