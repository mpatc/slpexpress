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


  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.getTokens();
  }


  getTokens(): void {
    this.tokenService.getTokens().subscribe(tokens => this.tokens = tokens);
  }

}
