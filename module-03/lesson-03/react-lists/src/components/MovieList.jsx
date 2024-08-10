import { useState } from "react";
import moviesData from "../movies-data.json";
import MovieCard from "./MovieCard";

function MovieList() {
    const [movies, setMovies] = useState(moviesData);

    const updateMovie = (id) => {
        const updatedMovies = movies.filter((movie) => movie._id !== id);
        setMovies(updatedMovies)
    };
    return (
        <div>
            {movies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} updateMovie={updateMovie}/>
            ))}
        </div>
    );
}

export default MovieList;
