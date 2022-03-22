<div align="center">
  <h1>☁ realayers</h1>
  <br />
  Layer Components for React: Dialogs, Drawers, Tooltips, Menus, Context Menus, Notifications and Popovers
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
  <a href="https://opencollective.com/reaviz">
    <img alt="Open Collective backers and sponsors" src="https://img.shields.io/opencollective/all/reaviz?label=backers">
  </a>
</div>

---

## 🚀 Quick Links

- Checkout the [demos](https://master--5f64a424915bb90022b5d92a.chromatic.com)
- View the library on [Chromatic](https://chromatic.com/library?appId=5f64a424915bb90022b5d92a&branch=master)
- Learn about updates from the [changelog](CHANGELOG.md)

## 📦 Usage
Install the package via NPM:

```
npm i realayers --s
```
-or-
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

### Menu
```tsx
import React, { FC } from 'react';
import { useMenu } from 'realayers';

export const Simple = () => {
  const { toggleOpen, ref, Menu } = useMenu();

  return (
    <div>
      <button ref={ref} onClick={toggleOpen}>Open</button>
      <Menu>
        Hello
      </Menu>
    </div>
  );
};
```

### ContextMenu
```tsx
import React, { FC } from 'react';
import { ContextMenu } from 'realayers';

export const Simple = () => (
  <ContextMenu
    content={
      <div style={{ padding: 20 }}>
        something cool here
      </div>
    }
  >
    <button>👋 right click me</button>
  </ContextMenu>
);
```

### Notifications
```tsx
import React, { FC } from 'react';
import { Notifications, useNotification } from 'realayers';

export const App = () => (
  <Notifications>
    <YourComponent />
  </Notifications>
);

export const YourComponent = () => {
  const { notify } = useNotification();

  return (
    <button onClick={() => notify('Something good happened!')}>
      Notify
    </button>
  );
};
```

## 🎨 CSS Variables
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

  --color-notification: rgb(9, 9, 10, 0.9);
  --color-on-notification: #fff;
  --color-notification-border: transparent;
  --color-notification-error: red;
  --color-notification-warning: yellow;
  --color-notification-success: green;

  --color-layer-transparent: rgba(5, 6, 12, 0.9);
}
```

## 🔭 Development

If you want to run realayers locally, its super easy!

- Clone the repo
- `yarn install`
- `yarn start`
- Browser opens to Storybook page

## ❤️ Contributors

Thanks to all our contributors!

<a href="https://github.com/reaviz/realayers/graphs/contributors"><img src="https://opencollective.com/reaviz/contributors.svg?width=890" /></a>
