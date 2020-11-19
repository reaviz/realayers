<p align="center">
  <h1>☁ realayers</h1>
  <br />
  Layer Components for React: Dialogs, Drawers, Tooltips and Popovers
  <br /><br />
  <a href="https://github.com/reaviz/realayers/workflows/build/">
    <img src="https://github.com/reaviz/realayers/workflows/build/badge.svg?branch=master" />
  </a>
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
  <a href="https://discord.gg/tt8wGExq35">
    <img src="https://img.shields.io/discord/773948315037073409?label=discord">
  </a>
</p>

---

## 🚀 Quick Links

- Checkout the [demos](https://chromatic.com/library?appId=5f64a424915bb90022b5d92a&branch=master)
- Learn about updates from the [changelog](CHANGELOG.md)

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

### Dialog
```tsx
import React, { FC } from 'react';
import { useDialog } from 'realayers';

export const Simple = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header="Whats up">
        Hello
      </Dialog>
    </div>
  );
};
```

### Drawer
```tsx
import React, { FC } from 'react';
import { useDrawer } from 'realayers';

export const Simple = () => {
  const { toggleOpen, Drawer } = useDrawer();

  return (
    <div>
      <button onClick={toggleOpen}>Open</button>
      <Drawer>
        Hello
      </Drawer>
    </div>
  );
};
```

## 🔭 CSS Variables
Add the following CSS variables to your application's body.

```css
body {
  --color-popover: rgb(0, 0, 0, .8);
  --color-on-popover: white;
  
  --color-tooltip: rgb(0, 0, 0, .8);
  --color-on-tooltip: white;

  --color-dialog: #2c2c35;
  --color-on-dialog: #fff;

  --color-drawer: #2c2c35;
  --color-on-drawer: #fff;

  --color-layer-transparent: rgba(5, 6, 12, 0.9);
}
```
