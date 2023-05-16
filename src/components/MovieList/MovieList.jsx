import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard"
import FilterDropdown from "../FilterDropdown/FilterDropdown"
import './MovieList.css'
export default function MovieList(){
const [movies, setMovies] = useState([]);
const [category, setCategory] = useState('popular');
useEffect(() => {
    async function fetchMovies() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${import.meta.env.VITE_API_KEY}`);

      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    }
    fetchMovies();
  }, [category]);

function changeCategory(event){
  setCategory(event.target.value);
}

return (  
    <>
    <FilterDropdown value={category} onChange={changeCategory}/>
    <div className="MovieList">
    {movies.map((movie) => {
        return(
            <MovieCard movie={movie} key={movie.id}/>
        ) 
    })}
    </div>
    </>        
     )
}