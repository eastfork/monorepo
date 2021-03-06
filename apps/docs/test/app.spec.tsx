import React from 'react';
import { App } from '@abacus/frontend';
import { renderToString } from 'react-dom/server';

describe('<App />', () => {
  it('renders without throwing on the server', () => {
    expect(() => renderToString(<App text="" />)).not.toThrow();
  });

  it('renders provided text', () => {
    expect(renderToString(<App text="It works" />)).toContain('It works');
  });
});
