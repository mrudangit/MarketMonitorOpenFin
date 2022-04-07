import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule} from '@angular/common';
import { MarketDataCommonService } from './market-data-common.service';

@NgModule({
  imports: [AngularCommonModule],
  providers:[
    MarketDataCommonService
  ]
})
export class CommonModule {}
