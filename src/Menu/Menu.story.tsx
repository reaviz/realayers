import React, { Fragment } from 'react';
import { Menu } from './Menu';
import { useMenu } from './useMenu';

export default {
  title: 'Menu',
  component: Menu,
};

export const Simple = () => {
  const { toggleOpen, ref, Menu: MenuComponent } = useMenu();

  return (
    <Fragment>
      <button type="button" ref={ref} onClick={toggleOpen}>
        Open
      </button>
      <MenuComponent style={{ background: 'white' }}>
        <h1>Hello</h1>
        <ul>
          <li>Austin</li>
          <li>Mark</li>
          <li>Jack</li>
        </ul>
      </MenuComponent>
    </Fragment>
  );
};
