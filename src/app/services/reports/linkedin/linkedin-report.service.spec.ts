import { TestBed } from '@angular/core/testing';

import { LinkedinReportService } from './linkedin-report.service';

describe('LinkedinReportService', () => {
  let service: LinkedinReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkedinReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
