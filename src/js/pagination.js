'use strict';

import View from './view.js';
import { extend } from './utils.js';

const defaultOption = {
  totalPages: 20,
  visiblePages: 10,
  bgColor: 'rgba(26, 92, 255, 1)',
};

class Pagination {
  constructor(container, options) {
    this.container = container;
    this.options = extend(defaultOption, options);

    this.currentPage = 0;
    this.startPage = 0;
    this.endPage = 0;

    this.viewData = {
      currentPage: this.currentPage,
      startPage: this.startPage,
      endPage: this.endPage,
      totalPages: this.options.totalPages,
      bgColor: this.options.bgColor,
    };

    this.handler = {
      goPrevPage: this.goPrevPage.bind(this),
      goNextPage: this.goNextPage.bind(this),
      selectPage: this.selectPage.bind(this),
    };

    this.view = new View(container, this.viewData, this.handler);

    this.paginate(1);
  }

  goPrevPage() {
    this.paginate(this.currentPage - 1);
  }

  goNextPage() {
    this.paginate(this.currentPage + 1);
  }

  setPage(page) {
    this.currentPage = page;
  }

  paginate(page) {
    this.setPage(page);

    const isOdd = this.options.visiblePages % 2;

    const halfLess =
      this.currentPage - Math.floor(this.options.visiblePages / 2);

    const halfMore =
      this.currentPage + Math.floor(this.options.visiblePages / 2);

    if (this.options.totalPages <= this.options.visiblePages) {
      this.startPage = 1;
      this.endPage = this.options.totalPages;
    } else if (halfLess <= 0) {
      this.startPage = 1;
      this.endPage = this.options.visiblePages;
    } else if (
      (!isOdd && halfMore - 1 >= this.options.totalPages) ||
      (isOdd && halfMore >= this.options.totalPages)
    ) {
      this.startPage = this.options.totalPages - this.options.visiblePages + 1;
      this.endPage = this.options.totalPages;
    } else {
      this.startPage = halfLess;
      this.endPage = !isOdd ? halfMore - 1 : halfMore;
    }

    this.viewData.currentPage = this.currentPage;
    this.viewData.startPage = this.startPage;
    this.viewData.endPage = this.endPage;
    this.view.updateView(this.viewData);
  }

  selectPage(event) {
    this.paginate(Number(event.target.innerText));
  }

  getPage() {
    return this.currentPage;
  }
}

export default Pagination;
