import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, showFavourites } from '../actions';
import { data as moviesList } from '../data';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(moviesList));
  }

  isMovieInFavourites = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }

    return false;
  };

  changeTab = (val) => {
    this.props.dispatch(showFavourites(val));
  };
  render() {
    const { movies, search } = this.props; // will return { movies: {}, search: []}
    console.log('movies', movies);
    const { list, showFavourite, favourites = [] } = movies;
    const displayMovies = showFavourite ? favourites : list;
    console.log(displayMovies);
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourite ? '' : 'active-tabs'}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourite ? 'active-tabs' : ''}`}
              onClick={() => this.changeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div id="list">
            {displayMovies.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.imdbID}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieInFavourites(movie)}
              />
            ))}
            {displayMovies.length === 0 ? (
              <div className="no-movies">No movies to display! </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProp(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}
const connectedComponent = connect(mapStateToProp)(App);
export default connectedComponent;
