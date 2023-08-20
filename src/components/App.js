import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, showFavourites } from '../actions';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
      console.log('updated', store.getState());
    });

    store.dispatch(addMovies(data));

    console.log('State', store.getState());
  }
  isMovieFavourites = (movie) => {
    const { favourites } = this.props.store.getState();

    return favourites.includes(movie);
  };
  onChangetab = (val) => {
    this.props.store.dispatch(showFavourites(val));
  };
  render() {
    const { list, favourites, showFavourite } = this.props.store.getState();

    const displayMovies = showFavourite ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourite ? '' : 'active-tabs'}`}
              onClick={() => this.onChangetab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourite ? 'active-tabs' : ''}`}
              onClick={() => this.onChangetab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movie-${movie.imdbID}`}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFavourites(movie)}
                />
              );
            })}
          </div>
          {displayMovies.length === 0 ? <div>No Movies Found</div> : ''}
        </div>
      </div>
    );
  }
}

export default App;
