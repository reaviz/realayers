<p align="center">
  <h1>☁ realayers</h1>
  <br />
  Layer Components for React: Dialogs, Drawers, Tooltips and Popovers
  <br /><br />
  <a href="https://npm.im/realayers">
    <img src="https://img.shields.io/npm/v/realayers.svg" />
  </a>
  <a href="https://npm.im/realayers">
    <img src="https://badgen.net/npm/dw/realayers" />
  </a>
  <a href="https://github.com/realayers/realayers/blob/master/LICENSE">
    <img src="https://badgen.now.sh/badge/license/apache2" />
  </a>
  <a href="https://bundlephobia.com/result?p=realayers">
    <img src="https://badgen.net/bundlephobia/minzip/realayers">
  </a>
</p>

---

## 🚀 Quick Links

- Checkout the [demos](https://chromatic.com/library?appId=5f64a424915bb90022b5d92a&branch=master)

## 📦 Usage
Install the package via NPM:

```
yarn add realayers
```

### Tooltip
```tsx
import React, { FC } from 'react';
import { Tooltip } from 'realayers';

const MyComponent: FC = () => (
  <Tooltip content="Hi there">Hover me</Tooltip>
);
```

### Popover
```tsx
import React, { FC } from 'react';
import { Popover } from 'realayers';

const MyComponent: FC = () => (
  <Popover
    content={
      <div style={{ textAlign: 'center'}}>
        <h1>WHATS UP????!</h1>
        <button type="button">Click me</button>
      </div>
    }
  >
    Click me
  </Popover>
);
```

## 🔭 CSS Variables
Add the following CSS variables to your application's body.

```
var(--color-popover)
var(--color-on-popover)
var(--color-tooltip)
var(--color-on-tooltip)
```
