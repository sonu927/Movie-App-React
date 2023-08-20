import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SHOW_FAVOURITES,
} from '../actions';

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourite: false,
};

export const movies = (state = initialMoviesState, action) => {
  //   if (action.type === ADD_MOVIES) {
  //     return {
  //       ...state,
  //       list: action.movies,
  //     };
  //   }

  //   return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FROM_FAVOURITES:
      const filterArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favourites: filterArray,
      };

    case SHOW_FAVOURITES:
      return {
        ...state,
        showFavourite: action.val,
      };
    default:
      return state;
  }
};
