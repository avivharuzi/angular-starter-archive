import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {
  public totalPages: number;
  public startPage: number;
  public endPage: number;
  public startIndex: number;
  public endIndex: number;
  public pages: any;

  constructor () {
    this.totalPages = 0;
    this.startPage = 0;
    this.endPage = 0;
    this.startIndex = 0;
    this.endIndex = 0;
    this.pages = null;
  }

  range(start?: number, stop?: number, step?: number) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    let idx = 0;
    let length: number = Math.max(Math.ceil((stop - start) / step), 0);
    let range: number[] = new Array(length);

    while (idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10): Object {
    // calculate total pages
    this.totalPages = Math.ceil(totalItems / pageSize);

    if (this.totalPages <= 10) {
      // less than 10 total pages so show all
      this.startPage = 1;
      this.endPage = this.totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        this.startPage = 1;
        this.endPage = 10;
      } else if (currentPage + 4 >= this.totalPages) {
        this.startPage = this.totalPages - 9;
        this.endPage = this.totalPages;
      } else {
        this.startPage = currentPage - 5;
        this.endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    this.startIndex = (currentPage - 1) * pageSize;
    this.endIndex = Math.min(this.startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    this.pages = this.range(this.startPage, this.endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: this.totalPages,
      startPage: this.startPage,
      endPage: this.endPage,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      pages: this.pages
    };
  }
}
