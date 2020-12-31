'use strict';

import { replaceTemplateByContext, createElementByTemplate } from './utils.js';

const defaultTemplate = {
  prevButton: '<button class="button">prev</button>',
  nextButton: '<button class="button">next</button>',
  disabledPrevButton: '<button class="disabled button">prev</button>',
  disabledNextButton: '<button class="disabled button">next</button>',
  page: '<button class="button">{{ num }}</button>',
  currentPage:
    '<button class="focus" style="background-color: {{ bgColor }}">{{ num }}</button>',
};

class View {
  constructor(container, viewData, handler) {
    this.containerElement = container;
    this.containerElement.classList.add('pagination');
    this.template = defaultTemplate;

    this.currentPage = viewData.currentPage;
    this.startPage = viewData.startPage;
    this.endPage = viewData.endPage;
    this.totalPages = viewData.totalPages;
    this.bgColor = viewData.bgColor;

    this.goPrevPage = handler.goPrevPage;
    this.goNextPage = handler.goNextPage;
    this.selectPage = handler.selectPage;
  }

  appendPrevButton() {
    if (this.currentPage <= 1) {
      const button = createElementByTemplate(this.template.disabledPrevButton);
      this.containerElement.appendChild(button);
    } else {
      const button = createElementByTemplate(this.template.prevButton);
      button.addEventListener('click', this.goPrevPage);
      this.containerElement.appendChild(button);
    }
  }

  appendNextButton() {
    if (this.currentPage >= this.totalPages) {
      const button = createElementByTemplate(this.template.disabledNextButton);
      this.containerElement.appendChild(button);
    } else {
      const button = createElementByTemplate(this.template.nextButton);
      button.addEventListener('click', this.goNextPage);
      this.containerElement.appendChild(button);
    }
  }

  appendPageButton() {
    for (let i = this.startPage; i <= this.endPage; i++) {
      if (i === this.currentPage) {
        const button = createElementByTemplate(
          replaceTemplateByContext(this.template.currentPage, {
            num: i,
            bgColor: this.bgColor,
          })
        );
        button.addEventListener('click', this.selectPage);
        this.containerElement.appendChild(button);
      } else {
        const button = createElementByTemplate(
          replaceTemplateByContext(this.template.page, { num: i })
        );
        button.addEventListener('click', this.selectPage);
        this.containerElement.appendChild(button);
      }
    }
  }

  clean() {
    this.containerElement.innerHTML = '';
  }

  updateView(viewData) {
    this.currentPage = viewData.currentPage;
    this.startPage = viewData.startPage;
    this.endPage = viewData.endPage;

    this.clean();
    this.appendPrevButton();
    this.appendPageButton();
    this.appendNextButton();
  }
}

export default View;
