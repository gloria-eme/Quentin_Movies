import React from "react";
import Poster from "../components/Poster";
import { getMovies } from "../data";
import Title from "../components/Title";
import { Link, Outlet } from "react-router-dom";
import Movie from "./Movie";
import { useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  return (
    <>
      <h1>Películas</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Poster movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies;
