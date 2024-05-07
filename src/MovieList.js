import React from 'react';
import Movie from './Movie';

function MovieList({ movies, favorites, toggleFavorite }) {
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default MovieList;