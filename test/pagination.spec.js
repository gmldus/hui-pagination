'use-strict';

import Pagination from '../src/js/pagination.js';

describe('Pagination Test', () => {
  describe('Set a new range of visible page numbers', () => {
    let container;

    beforeAll(() => {
      container = document.createElement('div');
    });

    it('should set current page on center when even number visible', () => {
      //given
      const pagination = new Pagination(container, {});
      const spyFn = jest.spyOn(pagination, 'paginate');

      //when
      pagination.paginate(7);

      //then
      expect(spyFn).toBeCalledTimes(1);
      expect(spyFn).toBeCalledWith(7);
      expect(pagination.startPage).toBe(2);
      expect(pagination.endPage).toBe(11);
    });

    it('should set current page center when odd number visible', () => {
      //given
      const pagination = new Pagination(container, {
        visiblePages: 5,
      });
      const spyFn = jest.spyOn(pagination, 'paginate');

      //when
      pagination.paginate(7);

      //then
      expect(spyFn).toBeCalledTimes(1);
      expect(spyFn).toBeCalledWith(7);
      expect(pagination.startPage).toBe(5);
      expect(pagination.endPage).toBe(9);
    });
  });

  describe('Call paginate function when select a new page', () => {
    let container;

    beforeAll(() => {
      container = document.createElement('div');
    });

    it('selectPage function should call paginate function', () => {
      //given
      const pagination = new Pagination(container, {});
      const event = { target: {} };
      const spyFn = jest.spyOn(pagination, 'paginate');

      //when
      pagination.selectPage(event);

      //then
      expect(spyFn).toBeCalledTimes(1);
    });
  });
});
