import React, { Fragment } from 'react';
import { useDrawer } from './useDrawer';
import { Drawer } from './Drawer';

export const Simple = () => {
  const { toggleOpen, Drawer } = useDrawer();
  return (
    <Fragment>
      <Drawer>
        <p>Hello There!</p>
      </Drawer>
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
    </Fragment>
  );
};

export const Header = () => {
  const { toggleOpen, Drawer } = useDrawer();
  return (
    <Fragment>
      <Drawer header="Hello!!!!">
        <p>Hello There!</p>
      </Drawer>
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
    </Fragment>
  );
};

export default {
  title: 'Drawer',
  component: Drawer
};
