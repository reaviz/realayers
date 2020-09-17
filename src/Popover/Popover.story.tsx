import React from 'react';
import { Popover } from './Popover';

export const Simple = () => (
  <div style={{ textAlign: 'center', width: '100%', margin: '50px' }}>
    <Popover
      content={
        <div style={{ textAlign: 'center'}}>
          <h1>WHATS UP????!</h1>
          <button type="button">Click me</button>
        </div>
      }
    >
      Hi!
    </Popover>
  </div>
);

export default {
  title: 'Popover',
  component: Popover
};
