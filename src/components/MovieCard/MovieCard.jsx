import { useEffect, useState  } from "react";
import './MovieCards.css'
import { Route, Routes } from "react-router-dom";
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
export default function MovieCard (props) {
  const {movie } = props;
      return (
        <div className="cards">
              <a href={"/" + movie.id} key={movie.id}>
                <div className="cardDivs">
                  <h2>{movie.title}</h2>
                  <p>{movie.vote_average}</p>
                  <div>
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                  </div>
                  <MarkAsSeenBtn onClick={() => haveSeen(movie.title)}/>
                </div>
              </a>
        </div>
      );
}