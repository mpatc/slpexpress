import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    {
      const tokens = [
      { id: 1, name: 'Basic SLP Token', shortname: 'BST', age: 23, totalsupply: 345345345345, cirsupply: 345345435 },
      { id: 2, name: 'SundaeCoin', shortname: 'SDC', age: 44, totalsupply: 34534534534, cirsupply: 3453453453 },
      { id: 3, name: 'WindCoin', shortname: 'WND', age: 54, totalsupply: 567756752354, cirsupply: 34534636576354 },
      { id: 4, name: 'WaterCoin', shortname: 'WRC', age: 872, totalsupply: 23446456, cirsupply: 634 },
      { id: 5, name: 'FireCoin', shortname: 'FRC', age: 12, totalsupply: 342342234, cirsupply: 568872345 },
      { id: 6, name: 'EarthCoin', shortname: 'ERC', age: 3, totalsupply: 345453534, cirsupply: 7 },
      { id: 7, name: 'Dynamic Experience Token', shortname: 'DET', age: 777, totalsupply: 78897867768 },
      { id: 8, name: 'Spaaaaming name token silly long Coin', shortname: 'SLT', age: 44, totalsupply: 324234, cirsupply: 345645674567 },
      { id: 9, name: 'HappyTrails Fun Game Coin', shortname: 'HTC', age: 33, totalsupply: 678786876678, cirsupply: 435345346 },
      { id: 10, name: 'Electric Company Tokens', shortname: 'ECT', age: 546, totalsupply: 324234234, cirsupply: 7777777777 }
  ];
  return {tokens};
  }
  }
}

