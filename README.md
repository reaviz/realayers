# ☁ realayers
Layer Components for React: Dialogs, Drawers, Tooltips and Popovers

## Components
- Tooltips
- Popover

## Usage
Install the package via NPM:

```
yarn add realayers
```

### Tooltip
```
import React, { FC } from 'react';
import { Tooltip } from 'realayers';

const MyComponent: FC = () => (
  <Tooltip content="Hi there">Hover me</Tooltip>
);
```

### Popover
```
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

## CSS Variables
Add the following CSS variables to your application's body.

```
var(--color-popover)
var(--color-on-popover)
var(--color-tooltip)
var(--color-on-tooltip)
```
