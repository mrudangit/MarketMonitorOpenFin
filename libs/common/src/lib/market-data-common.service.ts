import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataCommonService {

  constructor() {
    console.log('Common Market Data Service')

    const worker = new Worker(new URL('market-data-common.worker.ts', import.meta.url), {name:'message', type: 'module'});

  }
}
