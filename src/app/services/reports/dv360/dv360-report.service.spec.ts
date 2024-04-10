import { TestBed } from '@angular/core/testing';

import { DV360ReportService } from './dv360-report.service';

describe('ReportService', () => {
  let service: DV360ReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DV360ReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
