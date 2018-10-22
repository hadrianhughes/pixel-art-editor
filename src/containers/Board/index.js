import React from 'react';

import Board from '../../components/Board';

class BoardContainer extends React.Component {
  constructor (props) {
    super(props);

    this.el = null;
  }

  render () {
    return (
      <Board getRef={e => this.el = e} />
    );
  }
}

export default BoardContainer;
