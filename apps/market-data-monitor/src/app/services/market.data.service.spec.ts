import { TestBed } from '@angular/core/testing';
import { MarketDataService } from './market.data.service';


describe('Market.DataService', () => {
  let service: MarketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
