import React from 'react';
import { addFavourites, removeFavourites } from '../actions';

class MovieCard extends React.Component {
  handleFavouritesClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourites(movie));
  };

  handleUnFavouritesClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavourites(movie));
  };
  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>

            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouritesClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouritesClick}
              >
                Favourites
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
