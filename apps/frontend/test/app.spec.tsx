import React from 'react';
import { renderToString } from 'react-dom/server';
import { shallow } from 'enzyme';

import { Main } from '@abacus/components/main';
import { App, defaultText } from '@abacus/frontend';

describe('<App />', () => {
  it('renders without throwing on the server', () => {
    const wrapper = shallow(<App text="" />);
    expect(wrapper.contains(<Main text={defaultText} />)).toEqual(true);
  });

  it('renders provided text', () => {
    expect(renderToString(<App text="It works" />)).toContain('It works');
  });
});
