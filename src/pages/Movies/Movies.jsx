import "./movies.css"
import React from "react";
import Poster from "../../components/Poster";
import { getMovies } from "../../data";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  return (
    <div className="divMovies">
      <h1 className="h1Movies">Películas</h1>
      <ul className="ulMovies">
        {movies.map((movie) => (
          <li className="liMovies" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Poster movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Movies;
