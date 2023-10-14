export interface IPageInfo {
  pageSize: number;
  hasNext: boolean;
  cursor?: string | number;
  pageNumber?: number;
  totalPages?: number;
}

export class PageInfo {
  cursor;
  pageSize;
  pageNumber;
  totalPages;
  hasNext;

  constructor(pageDetail: IPageInfo) {
    this.pageNumber = pageDetail.pageNumber;
    this.pageSize = pageDetail.pageSize;
    this.totalPages = pageDetail.totalPages;
    this.cursor = pageDetail.cursor;
    this.hasNext = pageDetail.hasNext;
  }
}
