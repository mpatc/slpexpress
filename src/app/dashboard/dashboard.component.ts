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
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public barChartType = 'line';
  public barChartLegend = false;
  public greenLineChartColors: Array<any> = [
    {
      backgroundColor: '#ccffcc',
      borderColor: '#009900',
      pointBackgroundColor: '#e6ffe6',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#003300'
    }
  ];


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.getTokens();
  }

  getTokens(): void {
    this.tokenService.getTokens()
      .subscribe(tokens => this.tokens = tokens.slice(0, 4));
    }
  }

