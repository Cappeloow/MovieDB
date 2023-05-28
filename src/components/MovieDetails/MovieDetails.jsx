import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './MovieDetails.css'
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
export default function MovieDetails(){
const {id} = useParams();
const [movie, setMovie] = useState(null);
useEffect(()=> {
    async function FetchMovie(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        console.log(data);
        setMovie(data);
    }
    FetchMovie();
},[id]);

if (movie === null) {
    return <div>Loading...</div>;
  }
return (
    <div>
        {movie && <h1>{movie.title}</h1>}
        {movie !== null && <p>{movie.overview}</p>}
        {movie && <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />}
        <MarkAsSeenBtn value={movie.title}/>
    </div>
)
}