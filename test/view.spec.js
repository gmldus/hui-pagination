'use-strict';

import Pagination from '../src/js/pagination.js';

describe('View Test', () => {
  describe('clean function make child list empty', () => {
    let container;

    beforeAll(() => {
      container = document.createElement('div');
    });

    it('the container element should have empty child list', () => {
      //given
      const pagination = new Pagination(container, {});
      const spyFn = jest.spyOn(pagination.view, 'clean');

      //when
      pagination.view.clean();

      //then
      expect(spyFn).toBeCalledTimes(1);
      expect(container.childNodes.length).toBe(0);
    });
  });
});
