import { Component } from '@angular/core';
import { MarketDataService } from './services/market.data.service';
import { MarketDataCommonService } from '@solution-architects/common';


@Component({
  selector: 'solution-architects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'market-data-monitor';
  constructor(private marketDataService: MarketDataService, private commonMarketDataService: MarketDataCommonService) {



  }
}
