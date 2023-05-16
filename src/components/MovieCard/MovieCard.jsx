import { useEffect, useState  } from "react";
import './MovieCards.css'
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
export default function MovieCard (props) {


  
  const {movie } = props;
      return (
        <div className="cards">
              <a href={"/" + movie.id}>
                  <img id="MovieListCards"src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              </a>
                  <MarkAsSeenBtn className="MarkAsSeen" onClick={() => haveSeen(movie.title)}/>
        </div>
      );
}