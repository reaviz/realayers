import React from 'react';
import { Tooltip } from './Tooltip';

export const Simple = () => (
  <div style={{ textAlign: 'center', width: '100%', margin: '50px' }}>
    <Tooltip content="Hi there">Hover me</Tooltip>
  </div>
);

export const Disabled = () => (
  <div style={{ textAlign: 'center', width: '100%', margin: '50px' }}>
    <Tooltip content="Hi there" disabled={true}>
      <button disabled>
        Hover me
      </button>
    </Tooltip>
  </div>
);

export default {
  title: 'Tooltip',
  component: Tooltip
};
