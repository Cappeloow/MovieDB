import { useEffect, useState  } from "react";
import './MovieCards.css'
import { Route, Routes } from "react-router-dom";
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
export default function MovieCard () {
    const [movies, setMovies] = useState([]);
    const [seen, setSeen] = useState([]);


    function haveSeen (movie){
        console.log(`this is ${movie}`);
    }

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
        <div className="cards">
          {movies.map((movie) => {
            return (
              <a href={"/" + movie.id} key={movie.id}>
                <div className="cardDivs">
                  <h2>{movie.title}</h2>
                  <p>{movie.vote_average}</p>
                  <MarkAsSeenBtn onClick={() => haveSeen(movie.title)}/>
                </div>
              </a>
            );
          })}
        </div>
      );
}