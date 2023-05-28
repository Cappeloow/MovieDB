import React, { useState } from 'react';
import { useMovieContext } from '../../context/MyMoviesContext';

export default function MarkAsSeenBtn({value}) {

  const { toggleMovies } = useMovieContext();
  const [seen, setSeen] = useState('Add');
  
  const handleToggle = () => {
    toggleMovies(value); 
    setSeen(seen === 'Add' ? 'Remove' : 'Add'); 
  };

  return <button onClick={handleToggle}>{seen}</button>;
}