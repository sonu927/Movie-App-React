import { ADD_MOVIES } from '../actions';

const initialMoviesState = {
  list: [],
  favourites: [],
};

export const movies = (state = initialMoviesState, action) => {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }

  return state;
};