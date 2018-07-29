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

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.gettokenes();
  }

  gettokenes(): void {
    this.tokenService.getTokens()
      .subscribe(tokens => this.tokens = tokens.slice(1, 5));
  }
}
