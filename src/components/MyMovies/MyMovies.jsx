import React, { useEffect, useState } from 'react';
import { FaFortAwesome } from 'react-icons/fa';
import { useMovieContext } from '../../context/MyMoviesContext';

export default function MyMovies() {
  const { movies } = useMovieContext();

  return (
    <div className="headerIcon">
      <a href="/">
        <FaFortAwesome />
      </a>
      <div>
        {movies.map((movie) => (
          <p key={movie}>{movie}</p>
        ))}
      </div>
    </div>
  );
}
