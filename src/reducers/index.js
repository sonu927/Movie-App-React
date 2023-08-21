import { combineReducers } from 'redux';
import {
  ADD_MOVIES,
  ADD_SEARCH_MOVIE,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SHOW_FAVOURITES,
  ADD_MOVIE_TO_LIST,
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
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
};

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_MOVIE:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

const initialRootReducer = {
  movies: initialMoviesState,
  search: initialSearchState,
};

// export function rootReducer(state = initialRootReducer, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies: movies,
  search: search,
});
