import { TestBed } from '@angular/core/testing';

import { GoogleAdsReportService } from './google-ads-report.service';

describe('GoogleAdsReportService', () => {
  let service: GoogleAdsReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleAdsReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
