import React, { createContext, useContext, useState, useEffect } from 'react';

const MyMoviesContext = createContext();
export const useMovieContext = () => useContext(MyMoviesContext);

export const MyMoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);



  const toggleMovies = (id) => {
    if (movies.includes(id)) {
      const updatedMovieList = movies.filter((movieId) => movieId !== id);
      setMovies(updatedMovieList);
    } else {
      setMovies([...movies, id]);
    }
  };

  useEffect(() => {
      localStorage.setItem('movies', JSON.stringify(movies))
},[movies])


  return (
    <MyMoviesContext.Provider value={{ movies, toggleMovies }}>
      {children}
    </MyMoviesContext.Provider>
  );
};