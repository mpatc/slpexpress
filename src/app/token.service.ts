import { Injectable } from '@angular/core';
import { Token } from './token';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class TokenService {



  private tokensUrl = 'api/tokens';  // URL to web api


  getTokens(): Observable<Token[]> {
    this.messageService.add('Token Service has fetched a list of Tokens');
    return this.http.get<Token[]>(this.tokensUrl)
    .pipe(
      catchError(this.handleError('getToken', []))
    );
  }

getToken(shortname: string): Observable<Token> {
  this.messageService.add(`Token Service has fetched data on token ${shortname}`);
  const url = `${this.tokensUrl}/${shortname}`;
  return this.http.get<Token>(url).pipe(
    tap(_ => this.log(`fetched token id= ${shortname}`))
  );
}
getTokenById(id: number): Observable<Token> {
  const url = `${this.tokensUrl}/${id}`;
  return this.http.get<Token>(url).pipe(
    tap(_ => this.log(`fetched token id= ${id}`))
  );
}
randomizeToken(token: Token): Observable<any> {
  token.barData = [
    {data: [(Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100)]
      , label: 'Series A'},
    {data: [(Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100),
       (Math.random() * 100)]
      , label: 'Series B'}
  ];
  return this.http.put(this.tokensUrl, token, httpOptions).pipe(
    tap(_ => this.log(`updated token id=${token.id}`)),
    catchError(this.handleError<any>('updateToken'))
  );
}

private log(message: string) {
  this.messageService.add(`tokenService: ${message}`);
}

updateToken (token: Token): Observable<any> {
  return this.http.put(this.tokensUrl, token, httpOptions).pipe(
    tap(_ => this.log(`updated token id=${token.id}`)),
    catchError(this.handleError<any>('updateToken'))
  );
}
// addToken (token: Token): Observable<Token> {
//   return this.http.post<Token>(this.tokensUrl, token, httpOptions).pipe(
//     // tslint:disable-next-line:no-shadowed-variable
//     tap((token: Token) => this.log(`added token w/ id=${token.id}`)),
//     catchError(this.handleError<Token>('addToken'))
//   );
// }
addToken (token: Token): Observable<Token> {
  return this.http.post<Token>(this.tokensUrl, token, httpOptions).pipe(
    tap((token1: Token) => this.log(`added token w/ id=${token1.id}`)),
    catchError(this.handleError<Token>('addToken'))
  );
}
/** DELETE: delete the token from the server */
deleteToken (token: Token | number): Observable<Token> {
  const id = typeof token === 'number' ? token : token.id;
  const url = `${this.tokensUrl}/${id}`;

  return this.http.delete<Token>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted token id=${id}`)),
    catchError(this.handleError<Token>('deleteToken'))
  );
}

/* GET tokens whose name contains search term */
searchTokens(term: string): Observable<Token[]> {
  if (!term.trim()) {
    // if not search term, return empty token array.
    return of([]);
  }
  return this.http.get<Token[]>(`${this.tokensUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found tokens matching "${term}"`)),
    catchError(this.handleError<Token[]>('searchTokens', []))
  );
}


/**
 * Copy Paste Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
constructor(private http: HttpClient,
  private messageService: MessageService) { }
}
