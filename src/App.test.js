import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { setupTests } from './setupTests';

describe('App', () => {
  setupTests();

  it('renders the app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});