import { Injectable } from '@angular/core';
import { LoginInfo } from './LoginInfo';
import { MarketData } from './MarketData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {



  public readonly MarketDataStream = new BehaviorSubject<MarketData|undefined>(undefined);

  private readonly marketDataMap: Map<number, MarketData> = new Map<number, MarketData>();

  private readonly serverUrl = 'ws://mrudang-WS-Z390-PRO:10000/marketData'
  // @ts-ignore
  private marketDataConnection: WebSocket = null;
  constructor() {
    console.log('Market Data Service Initializing');
    this.subscribeToMarketData();
  }

  public subscribeToMarketData(): void {

    this.marketDataConnection = new WebSocket(this.serverUrl);
    this.marketDataConnection.binaryType = 'arraybuffer';
    this.marketDataConnection.onopen = (event)=> {
      console.log('Connection Opened : ', event);
      this.sendLogin();
    }

    this.marketDataConnection.onclose =  (event) =>{
      console.log('Connection Closed : ', event);
    }

    this.marketDataConnection.onerror = (event) => {
      console.log('Connection Error : ', event);
    }

    this.marketDataConnection.onmessage = (message) => {
      this.processMarketData(message);
    }

  }

  public sendLogin(): void {
    const loginInfo = new LoginInfo();
    loginInfo.sendMarketDataSnapShot = true;
    loginInfo.numOfMarketDataRecords = 10;
    loginInfo.marketDataSnapShotSize = 10;
    loginInfo.sendMarketDataUpdates = true;
    loginInfo.updateFrequency = 2000;
    loginInfo.updatePercentage = 20;

    this.marketDataConnection.send(JSON.stringify(loginInfo));
  }

  private processMarketData(message: MessageEvent) {
    const buffer: ArrayBuffer = message.data;
    console.log('Message Length : ', buffer.byteLength);
    const numOfRecords = buffer.byteLength / MarketData.CLASS_SIZE;
    for(let i = 0 ; i < numOfRecords; i++){
      const offSet = i*MarketData.CLASS_SIZE;
      const index = MarketData.getMarketDataKey(buffer,offSet);
      let currentMd = this.marketDataMap.get(index);
      if( !currentMd) {
        currentMd = new MarketData(buffer, offSet);
        this.marketDataMap.set(index, currentMd);
      }else{
        currentMd.update(buffer, offSet, true);
      }
      console.log('Market Data : ', currentMd);
      this.MarketDataStream.next(currentMd);
    }
  }
}
