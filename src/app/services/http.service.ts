import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private httpClient: HttpClient
  ) { }

  base(action: string, args: any[]): Observable<any> {
    return this.httpClient[action](args[0], args[1], args[2])
      .pipe(
        map((res: any): Observable<any> => {
          return res;
        }),
        catchError((err: HttpErrorResponse) => throwError(err.error))
      );
  }

  get(...args: any[]): Observable<any> {
    return this.base('get', args);
  }

  post(...args: any[]): Observable<any> {
    return this.base('post', args);
  }

  put(...args: any[]): Observable<any> {
    return this.base('put', args);
  }

  delete(...args: any[]): Observable<any> {
    return this.base('delete', args);
  }
}
