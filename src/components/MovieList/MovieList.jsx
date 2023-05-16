import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard"
import FilterDropdown from "../FilterDropdown/FilterDropdown"
import './MovieList.css'
export default function MovieList(){
const [movies, setMovies] = useState([]);
useEffect(() => {
    async function fetchMovies() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);

      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

return (  
    <>
    <FilterDropdown/>
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