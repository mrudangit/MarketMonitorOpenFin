import { Injectable } from '@angular/core';
import { MarketData } from '../../../../market-data-service/src/app/services/MarketData';

declare const fin:any;

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private readonly MARKET_DATA_CHANNEL='MARKET_DATA_CHANNEL'
  private readonly MARKET_DATA_TOPIC='MarketData';

  constructor() {

    //new URL('./app.worker', import.meta.url)
    const worker = new Worker(new URL('../market-data-service.worker.ts', import.meta.url), {name:'message', type: 'module'});
    fin.InterApplicationBus.subscribe({ uuid: '*' }, this.MARKET_DATA_TOPIC, ( marektData:any) => {
      this.processMarketData(marektData);
    }).then(() => console.log('Subscribed to *'));

  }

  private processMarketData(marektData: MarketData) {
    console.log('RX Market Data From IAB : ', marektData);
  }
}
