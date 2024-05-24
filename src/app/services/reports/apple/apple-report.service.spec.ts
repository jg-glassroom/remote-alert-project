import { TestBed } from '@angular/core/testing';

import { AppleReportService } from './apple-report.service';

describe('AppleReportService', () => {
  let service: AppleReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppleReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
