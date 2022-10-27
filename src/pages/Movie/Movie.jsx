import "./movie.css"
import React from "react";
import { getMovie } from "../../data";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../components/Card";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = getMovie(id);

  if (!movie) return <p>Te has inventado la película</p>;

  return (
    <>
        <Card movie={movie}/>
    </>
  );
};

export default Movie;
