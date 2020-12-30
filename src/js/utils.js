'use strict';

export const extend = (origin, extra) => {
  for (const key in origin) {
    if (key in extra) {
      origin[key] = extra[key];
    }
  }

  return origin;
};

export const replaceTemplateByContext = (htmlString, context) => {
  let translatedHtml = htmlString;
  const targets = translatedHtml.match(/{{\s[a-z]+\s}}/g);

  if (!targets) return htmlString;

  targets.forEach(target => {
    const id = target.slice(3, target.length - 3);
    if (id && id in context) {
      translatedHtml = translatedHtml.replace(target, context[id]);
    }
  });

  return translatedHtml;
};

export const createElementByTemplate = template => {
  const parent = document.createElement('div');
  parent.innerHTML = template;

  return parent.firstChild;
};
