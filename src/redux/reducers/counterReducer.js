import {actions} from '../actions';
const initialState = {
  count: 0,
};

export default (state = initialState, {type, data}) => {
  switch (type) {
    case actions.SET_COUNT:
        console.log(data)
      return {...state, ...data};

    default:
      return state;
  }
};
