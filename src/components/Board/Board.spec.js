import React from 'react';
import renderer from 'react-test-renderer';
import Board from '../Board';

describe('Board: component', () => {
  it('Matches snapshot', () => {
    const component = renderer.create(
      <Board />
    );

    expect(component.toJSON()).toMatchSnapshot();
  })
});
