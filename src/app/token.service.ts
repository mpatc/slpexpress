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
    return of(TOKENS);
  }

  constructor(private messageService: MessageService) { }
}
