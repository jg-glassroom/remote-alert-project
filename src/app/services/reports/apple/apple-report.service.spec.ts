import { TestBed } from '@angular/core/testing';

import { FacebookReportService } from './facebook-report.service';

describe('FacebookReportService', () => {
  let service: FacebookReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
