import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
  constructor(
    private http: HttpClient
  ) { }

  base(action: string, args: any[]): Observable<any> {
    return this.http[action](args[0], args[1], args[2]).map((res: any): Observable<any> => {
      return res;
    })
    .catch((err: HttpErrorResponse) => Observable.throw(err.error));
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
