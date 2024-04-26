import { TestBed } from '@angular/core/testing';

import { BingReportService } from './bing-report.service';

describe('BingReportService', () => {
  let service: BingReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BingReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
