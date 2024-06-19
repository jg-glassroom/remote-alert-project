import { TestBed } from '@angular/core/testing';

import { BusinessAccountService } from './business-account.service';

describe('BusinessAccountService', () => {
  let service: BusinessAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
