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
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.tokenService.addToken({ name } as Token)
      .subscribe(token => {
        this.tokens.push(token);
      });
  }


  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.getTokens();
  }
  delete(token: Token): void {
    this.tokens = this.tokens.filter(h => h !== token);
    this.tokenService.deleteToken(token).subscribe();
  }

  getTokens(): void {
    this.tokenService.getTokens().subscribe(tokens => this.tokens = tokens);
  }

}
