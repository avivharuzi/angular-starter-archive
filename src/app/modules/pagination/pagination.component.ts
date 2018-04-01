import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  @Input() public pageItems: any[];
  @Input() public pageSize: number;
  @Input() public scrollTop: boolean;
  @Output() public pageChange: EventEmitter<any> = new EventEmitter<any>();

  public pager: any;
  public newPageItems: any[];

  constructor(
    private paginationService: PaginationService
  ) {
    this.scrollTop = false;
  }

  ngOnInit() {
    this.pager = {};
    this.setPage(1);
  }

  setPage(page: number): void {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    } else {
      this.pager = this.paginationService.getPager(this.pageItems.length, page, this.pageSize);
      this.newPageItems = this.pageItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
      this.pageChange.emit(this.newPageItems);
      if (this.scrollTop) {
        window.scrollTo(0, 0);
      }
    }
  }
}
