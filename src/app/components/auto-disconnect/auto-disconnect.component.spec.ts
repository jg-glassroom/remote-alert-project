import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDisconnectComponent } from './auto-disconnect.component';

describe('AutoDisconnectComponent', () => {
  let component: AutoDisconnectComponent;
  let fixture: ComponentFixture<AutoDisconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoDisconnectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoDisconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
