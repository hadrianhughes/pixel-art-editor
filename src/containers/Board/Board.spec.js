import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from '../Board';

describe('Board: container', () => {
  configure({ adapter: new Adapter() });

  it('Fetches ref of Board presentational component', () => {
    const wrapper = mount(<Board />);
    expect(wrapper.instance().el).toBeTruthy();
  });
});
