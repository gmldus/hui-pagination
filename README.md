# Pagination :blue_book:

[![Version](https://img.shields.io/npm/v/hui-pagination.svg)](https://www.npmjs.com/package/hui-pagination)

Pagination provides you a page information.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/38400989/103376519-311db800-4b20-11eb-95d8-75f3ae4cff90.gif)

## Install

```
npm install --save hui-pagination
```

## Usage

### HTML

Create a container element.

```html
<div id="pagination"></div>
```

### JavaScript

Import a component.

```javascript
const Pagination = require('hui-pagination'); /* CommonJS */
```

```javascript
import Pagination from 'hui-pagination'; /* ES6 */
```

You can create an instance by passing the container element and option.
The option will have **totalPages** and **visiblePages** property.

```javascript
const container = document.getElementById('pagination');
const option = {
  /* This is default value. */ totalPages: 20,
  visiblePages: 10,
};

const instance = new Pagination(container, option);

instance.getPage();
```

And you can get a current page for **getPage** function.
