import initialState from './initial';

const Board = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIXEL': {
      return state;
    }
    default:
      return state;
  }
};

export default Board;
