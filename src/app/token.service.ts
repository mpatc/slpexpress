import { Injectable } from '@angular/core';
import { Token } from './token';
import {TOKENS } from './mock-tokens';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getTokens(): Token[] {
    return TOKENS;
  }

  constructor() { }
}
