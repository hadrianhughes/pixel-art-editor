import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Canvas } from './styles';

const Board = ({ getRef }) => (
  <Wrapper>
    <Canvas ref={getRef} style={{ backgroundColor: 'white' }} />
  </Wrapper>
);

Board.propTypes = {
  getRef: PropTypes.func,
};

Board.defaultProps = {
  getRef: () => {},
};

export default Board;
