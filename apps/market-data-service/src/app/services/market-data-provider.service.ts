import { Injectable } from '@angular/core';
import { ChannelProvider } from 'openfin/_v2/api/interappbus/channel/provider';
import { Identity } from 'openfin/_v2/identity';
import { ProviderIdentity } from 'openfin/_v2/shapes/Identity';
import InterApplicationBus from 'openfin/_v2/api/interappbus/interappbus';
import { MarketDataService } from './market-data.service';
import { MarketData } from './MarketData';
declare const fin:any;
@Injectable({
  providedIn: 'root'
})
export class MarketDataProviderService {
  private marketBusProvider: ChannelProvider | undefined;
  private readonly MARKET_DATA_CHANNEL='MARKET_DATA_CHANNEL'
  private readonly MARKET_DATA_CHANNEL_HIGH_MID='MarketData.HIGH_MID'
  private readonly MARKET_DATA_CHANNEL_LOW_MID='MarketData.LOW_MID'
  private readonly MARKET_DATA_TOPIC='MarketData';
  private marketDataBus: InterApplicationBus | undefined;


  constructor(private marketDataService: MarketDataService) {


    this.marketDataService.MarketDataStream.subscribe(value => {
      if(value){
        this.publishMarketData(value)
      }
    })
    console.log('Market Data Channel Initialized');

    this.marketDataBus = fin.InterApplicationBus;
    fin.InterApplicationBus.Channel.create(this.MARKET_DATA_CHANNEL).then((bus: ChannelProvider) => {
      this.marketBusProvider = bus;

      this.marketBusProvider.register(this.MARKET_DATA_TOPIC,(payload, id) => {
        this.handleDataOnTopic(payload, id);
      })

      this.marketBusProvider.onConnection((identity, connectionMessage) => {
        this.handleNewConnection(identity, connectionMessage);
      })
      this.marketBusProvider.onDisconnection(identity => {
        console.log('Client Disconnected : ', identity);
      })

      this.marketBusProvider.onError((action, error, id) => {
        console.log('Error ON Channel : Action : ', action, ' Error : ', error,' ID : ', id);
      })
    });

  }

  private handleNewConnection(identity: Identity, connectionMessage: any) {
    console.log('New Connection From : ', identity, ' Data :', connectionMessage );
  }

  public publishMarketData(marketData: MarketData): void {
    // console.log('Publishing to IAB : ', marketData);

    this.marketDataBus?.publish(this.MARKET_DATA_TOPIC, marketData);


  }

  private handleDataOnTopic(payload: any, id: ProviderIdentity) {

    console.log('Data On Topic : ', payload, ' From : ', id);

  }
}
