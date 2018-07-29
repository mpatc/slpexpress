import { Injectable } from '@angular/core';
import { Token } from './token';
import {TOKENS } from './mock-tokens';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getTokens(): Observable<Token[]> {
    this.messageService.add('Token Service has fetched a list of Tokens');
    return of(TOKENS);
  }

getToken(shortname: string): Observable<Token> {
  this.messageService.add(`Token Service has fetched data on token ${shortname}`);
  return of (TOKENS.find(token => token.shortname === shortname));
}

  constructor(private messageService: MessageService) { }
}
