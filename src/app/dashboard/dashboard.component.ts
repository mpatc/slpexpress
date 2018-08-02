import { Component, OnInit } from '@angular/core';
import { Token } from '../token';
import { TokenService } from '../token.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tokens: Token[] = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = false;
  public dummyBarChart = [
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

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
  // public randomize(): void {
  //   const data = [
  //     Math.round(Math.random() * 100),
  //     (Math.random() * 100),
  //     (Math.random() * 100),
  //     (Math.random() * 100),
  //     (Math.random() * 100),
  //     (Math.random() * 100),
  //     (Math.random() * 100)];
  //   const clone = JSON.parse(JSON.stringify(this.dummyBarChart));
  //   clone[0].data = data;
  //   this.token.barData = clone;
  //   }
  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.getTokens();
  }

  getTokens(): void {
    this.tokenService.getTokens()
      .subscribe(tokens => this.tokens = tokens.slice(0, 4));
    }
  }

