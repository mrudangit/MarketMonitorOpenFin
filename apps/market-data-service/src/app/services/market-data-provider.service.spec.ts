import { TestBed } from '@angular/core/testing';

import { MarketDataProviderService } from './market-data-provider.service';

describe('MarketDataProviderService', () => {
  let service: MarketDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
