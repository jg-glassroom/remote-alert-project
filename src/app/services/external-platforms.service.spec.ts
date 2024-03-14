import { TestBed } from '@angular/core/testing';

import { ExternalPlatformsService } from './external-platforms.service';

describe('ExternalPlatformsService', () => {
  let service: ExternalPlatformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalPlatformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
