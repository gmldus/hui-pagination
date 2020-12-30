'use strict';

import {
  extend,
  replaceTemplateByContext,
  createElementByTemplate,
} from '../src/js/utils.js';

describe('Util Test', () => {
  describe('Extend object', () => {
    let origin;

    beforeEach(() => {
      origin = {
        totalPages: 30,
        visiblePages: 10,
      };
    });

    it('should overwrite origin property value', () => {
      //given
      const extra = {
        totalPages: 40,
      };
      const expectedValue = {
        totalPages: 40,
        visiblePages: 10,
      };

      //when
      const result = extend(origin, extra);

      //then
      expect(result).toEqual(expectedValue);
    });

    it('should not reflect new property', () => {
      //given
      const extra = {
        totalPages: 40,
        activePages: 15,
      };
      const expectedValue = {
        totalPages: 40,
        visiblePages: 10,
      };

      //when
      const result = extend(origin, extra);

      //then
      expect(result).toEqual(expectedValue);
    });
  });

  describe('Replace html string according to variable', () => {
    it('should receive number value', () => {
      //gievn
      const htmlString = '<span>This is {{ num }}</span>';
      const expectedValue = '<span>This is 3</span>';

      //when
      const result = replaceTemplateByContext(htmlString, { num: 3 });

      //then
      expect(result).toBe(expectedValue);
    });

    it('should receive string value', () => {
      //gievn
      const htmlString = '<button>{{ girl }} and {{ boy }}</button>';
      const expectedValue = '<button>Susan and Mike</button>';

      //when
      const result = replaceTemplateByContext(htmlString, {
        girl: 'Susan',
        boy: 'Mike',
      });

      //then
      expect(result).toBe(expectedValue);
    });

    it('should receive only a to z string key', () => {
      //gievn
      const htmlString = '<span>{{ activity }} with {{ Who }}</span>';
      const expectedValue = '<span>study with {{ Who }}</span>';

      //when
      const result = replaceTemplateByContext(htmlString, {
        activity: 'study',
        Who: 'me',
      });

      //then
      expect(result).toBe(expectedValue);
    });
  });

  describe('Create element', () => {
    it('should return element by string template', () => {
      //given
      const template = '<div>hi</div>';
      const element = document.createElement('div');
      element.innerHTML = 'hi';

      //when
      const result = createElementByTemplate(template, element);

      //then
      expect(result).toEqual(element);
    });
  });
});
