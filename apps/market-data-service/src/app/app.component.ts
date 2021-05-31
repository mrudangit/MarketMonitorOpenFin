import { Component } from '@angular/core';
import { MarketDataProviderService } from './services/market-data-provider.service';
import { MarketDataService } from './services/market-data.service';

@Component({
  selector: 'solution-architects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'market-data-service';

  constructor(private marketDataProvider: MarketDataProviderService, private marketDataService: MarketDataService) {
  }

}
