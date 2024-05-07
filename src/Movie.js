import React from 'react';

function Movie({ movie, isFavorite, toggleFavorite }) {
  return (
    <div className="movie">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Price: {movie.price}</p>
      <button onClick={() => toggleFavorite(movie)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default Movie;