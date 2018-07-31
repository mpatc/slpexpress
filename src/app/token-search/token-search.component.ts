import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Token } from '../token';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token-search',
  templateUrl: './token-search.component.html',
  styleUrls: [ './token-search.component.css' ]
})
export class TokenSearchComponent implements OnInit {
  tokens$: Observable<Token[]>;
  private searchTerms = new Subject<string>();

  constructor(private tokenService: TokenService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.tokens$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.tokenService.searchTokens(term)),
    );
  }
}
