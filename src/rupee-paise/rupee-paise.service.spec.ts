import { TestBed } from '@angular/core/testing';

import { RupeePaiseService } from './rupee-paise.service';

describe('RupeePaiseService', () => {
  let service: RupeePaiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RupeePaiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
