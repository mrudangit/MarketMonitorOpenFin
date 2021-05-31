
import { BufferUtils } from './BufferUtils';

export class MarketData{
  public static INDEX_OFFSET=0;
  public static   SYMBOL_OFFSET=4;
  public static   SYMBOL_ID_OFFSET=44;
  public static   MID_OFFSET=52;

  public static   ASKPRICE0_OFFSET=60;
  public static   ASKPRICE1_OFFSET=68;
  public static   ASKPRICE2_OFFSET=76;
  public static   ASKPRICE3_OFFSET=84;
  public static   ASKPRICE4_OFFSET=92;

  public static   BIDPRICE0_OFFSET=100;
  public static   BIDPRICE1_OFFSET=108;
  public static   BIDPRICE2_OFFSET=116;
  public static   BIDPRICE3_OFFSET=124;
  public static   BIDPRICE4_OFFSET=132;

  public static   ASKSIZE0_OFFSET=140;
  public static   ASKSIZE1_OFFSET=148;
  public static   ASKSIZE2_OFFSET=156;
  public static   ASKSIZE3_OFFSET=164;
  public static   ASKSIZE4_OFFSET=172;


  public static   BIDSIZE0_OFFSET=180;
  public static   BIDSIZE1_OFFSET=188;
  public static   BIDSIZE2_OFFSET=196;
  public static   BIDSIZE3_OFFSET=204;
  public static   BIDSIZE4_OFFSET=212;


  public static   REVISIONID_OFFSET = 220;
  public static   SPREAD_OFFSET = 228;

  public static  CLASS_SIZE = 236;
  public Index = 0;
  public SymbolId  = 0;
  public Symbol = '';
  public RevisionID = 0;
  public Spread = 0;
  public Mid = 0;

  public AskPrice0 = 0;
  public AskPrice1 = 0;
  public AskPrice2 = 0;
  public AskPrice3 = 0;
  public AskPrice4 = 0;

  public BidPrice0 = 0;
  public BidPrice1 = 0;
  public BidPrice2 = 0;
  public BidPrice3 = 0;
  public BidPrice4 = 0;

  public AskSize0 = 0;
  public AskSize1 = 0;
  public AskSize2 = 0;
  public AskSize3 = 0;
  public AskSize4 = 0;

  public BidSize0 = 0;
  public BidSize1 = 0;
  public BidSize2 = 0;
  public BidSize3 = 0;
  public BidSize4 = 0;
  private dataView: DataView;




  constructor(arrayBuffer: ArrayBuffer, offSet: number) {
    this.dataView = new DataView(arrayBuffer, offSet);
    this.Index = this.dataView.getInt32(MarketData.INDEX_OFFSET, true);
    this.SymbolId = this.dataView.getInt32(MarketData.SYMBOL_ID_OFFSET,true);
    this.Symbol = BufferUtils.arrayBufferToString(arrayBuffer, offSet + MarketData.SYMBOL_OFFSET, 40);
    this.update(arrayBuffer, offSet, false);


  }

  public static getMarketDataKey(buffer: ArrayBuffer, offSet =0) : number{
    const dataView = new DataView(buffer, offSet);
    return dataView.getInt32(MarketData.INDEX_OFFSET, true)
  }

  update(buffer: ArrayBuffer, offSet: number, isUpdate = false) {
    if( isUpdate){
      this.dataView = new DataView(buffer, offSet);
    }
    this.RevisionID = this.dataView.getInt32(MarketData.REVISIONID_OFFSET,true);
    this.Spread = this.dataView.getFloat64(MarketData.SPREAD_OFFSET, true);
    this.Mid = this.dataView.getFloat64(MarketData.MID_OFFSET, true);

    this.AskPrice0 = this.dataView.getFloat64(MarketData.ASKPRICE0_OFFSET, true);
    this.AskPrice1 = this.dataView.getFloat64(MarketData.ASKPRICE1_OFFSET, true);
    this.AskPrice2 = this.dataView.getFloat64(MarketData.ASKPRICE2_OFFSET, true);
    this.AskPrice3 = this.dataView.getFloat64(MarketData.ASKPRICE3_OFFSET, true);
    this.AskPrice4 = this.dataView.getFloat64(MarketData.ASKPRICE4_OFFSET, true);

    this.BidPrice0 = this.dataView.getFloat64(MarketData.BIDPRICE0_OFFSET, true);
    this.BidPrice1 = this.dataView.getFloat64(MarketData.BIDPRICE1_OFFSET, true);
    this.BidPrice2 = this.dataView.getFloat64(MarketData.BIDPRICE2_OFFSET, true);
    this.BidPrice3 = this.dataView.getFloat64(MarketData.BIDPRICE3_OFFSET, true);
    this.BidPrice4 = this.dataView.getFloat64(MarketData.BIDPRICE4_OFFSET, true);

    this.AskSize0 = this.dataView.getInt32(MarketData.ASKSIZE0_OFFSET, true);
    this.AskSize0 = this.dataView.getInt32(MarketData.ASKSIZE1_OFFSET , true);
    this.AskSize2 = this.dataView.getInt32(MarketData.ASKSIZE2_OFFSET, true);
    this.AskSize3 = this.dataView.getInt32(MarketData.ASKSIZE3_OFFSET, true);
    this.AskSize4 = this.dataView.getInt32(MarketData.ASKSIZE4_OFFSET, true);

    this.BidSize0 = this.dataView.getInt32(MarketData.BIDSIZE0_OFFSET, true);
    this.BidSize1 = this.dataView.getInt32(MarketData.BIDSIZE0_OFFSET, true);
    this.BidSize2 = this.dataView.getInt32(MarketData.BIDSIZE0_OFFSET, true);
    this.BidSize3 = this.dataView.getInt32(MarketData.BIDSIZE0_OFFSET, true);
    this.BidSize4 = this.dataView.getInt32(MarketData.BIDSIZE0_OFFSET, true);
  }
}
