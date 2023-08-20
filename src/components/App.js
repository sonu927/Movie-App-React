import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
    });

    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data,
    });

    console.log('State', store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie) => {
              return <MovieCard movie={movie} key={`movie-${movie.imdbID}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
