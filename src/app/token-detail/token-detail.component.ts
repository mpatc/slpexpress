import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Token } from '../token';
import { TokenService } from '../token.service';


@Component({
  selector: 'app-token-detail',
  templateUrl: './token-detail.component.html',
  styleUrls: ['./token-detail.component.css']
})
export class TokenDetailComponent implements OnInit {
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
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
  @Input() token: Token;
  constructor(
    private route: ActivatedRoute,
    private tokenService: TokenService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getToken();
  }
  getToken(): void {
    const shortname = this.route.snapshot.paramMap.get('shortname');
    this.tokenService.getToken(shortname).subscribe(token => this.token = token);

  }
  save(): void {
    this.tokenService.updateToken(this.token)
      .subscribe(() => this.goBack());

  }
  goBack(): void {
    this.location.back();
  }
  randomizeChart() {
    this.tokenService.randomizeToken(this.token);
  }

}
