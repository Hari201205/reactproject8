import React, { useState } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import FilterTabs from './FilterTabs';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('All');


  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

 
  const toggleFavorite = (movie) => {
    if (favorites.includes(movie)) {
      setFavorites(favorites.filter((fav) => fav !== movie));
    } else {
      setFavorites([...favorites, movie]);
    }
  };


  const filterMoviesByCategory = (category) => {
    setSelectedTab(category);
  };


  const showFavorites = () => {
    setSelectedTab('Favorites');
  };

  return (
    <div className="container">
    
      <h1>Movie App</h1>
      <div className="add-movie-form">
        <h2>Add New Movie</h2>
        <AddMovieForm addMovie={addMovie} />
      </div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <FilterTabs filterMoviesByCategory={filterMoviesByCategory} showFavorites={showFavorites} />
      <MovieList
        movies={movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).filter((movie) =>
          (selectedTab === 'All' && !favorites.includes(movie)) ||
          (selectedTab === 'Favorites' && favorites.includes(movie)) ||
          movie.type === selectedTab
        )}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !type || !image) return;
    addMovie({ title, price, type, image });
    setTitle('');
    setPrice('');
    setType('');
    setImage('');
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default App;