import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubaccountComponent } from './subaccount.component';

describe('SubaccountComponent', () => {
  let component: SubaccountComponent;
  let fixture: ComponentFixture<SubaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
