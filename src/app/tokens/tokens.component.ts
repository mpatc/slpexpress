import { Component, OnInit } from '@angular/core';
import { Token } from '../token';
import { TokenService } from '../token.service';
@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  tokens: Token[];
  selectedToken: Token;


  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.getTokens();
  }

  onSelect(token: Token): void {
    this.selectedToken = token;
  }
  getTokens(): void {
    this.tokens = this.tokenService.getTokens();
  }

}

// export class Token {
  // id: number;
  // name: string;
  // shortname: string;
  // age: number;
  // totalsupply?: number;
  // cirsupply?: number;
  // activeusers?: number;
  // volume?: number;
  // price?: number;
