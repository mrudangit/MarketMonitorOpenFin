import { TestBed } from '@angular/core/testing';

import { MarketDataCommonService } from './market-data-common.service';

describe('MarketDataCommonService', () => {
  let service: MarketDataCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketDataCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
