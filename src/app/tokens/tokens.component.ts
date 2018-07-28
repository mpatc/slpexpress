import { Component, OnInit } from '@angular/core';
import { Token } from '../token';
import { TOKENS } from '../mock-tokens';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  tokens = TOKENS;
  selectedToken: Token;


  constructor() { }

  ngOnInit() {
  }

  onSelect(token: Token): void {
    this.selectedToken = token;
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
