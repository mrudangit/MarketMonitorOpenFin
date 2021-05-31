import { Component } from '@angular/core';
import { MarketDataService } from './services/market.data.service';


@Component({
  selector: 'solution-architects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'market-data-monitor';
  constructor(private marketDataService: MarketDataService) {



  }
}
