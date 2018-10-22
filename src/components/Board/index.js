import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ getRef }) => (
  <canvas ref={getRef} />
);

Board.propTypes = {
  getRef: PropTypes.func,
};

Board.defaultProps = {
  getRef: () => {},
};

export default Board;
