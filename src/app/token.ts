export class Token {
    id: number;
    name?: string;
    shortname?: string;
    age?: number;
    totalsupply?: number;
    cirsupply?: number;
    activeusers?: number;
    volume?: number;
    price?: number;
    dashinfo?: string;
    barData = [];
    randomize() {
       const data = [
            {data: [(Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100)]
              , label: 'Series A'},
            {data: [(Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100),
               (Math.random() * 100)]
              , label: 'Series B'}
          ];
          return data;
        }
    }
