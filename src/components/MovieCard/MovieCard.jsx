import { useEffect, useState  } from "react";
import './MovieCards.css'
import { Route, Routes } from "react-router-dom";
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
export default function MovieCard () {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
            const API_KEY = "9b7f608b03bd53481135e44457a14307";
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

          const data = await response.json();
          console.log(data);
          setMovies(data.results);
        }
        fetchMovies();
      }, []);

      return (
        <div className="cards">
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.vote_average}</p>
                <MarkAsSeenBtn/>
              </div>
            );
          })}
        </div>
      );
}