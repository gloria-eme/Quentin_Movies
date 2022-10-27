import React from "react";
import Poster from "../components/Poster";
import { getMovie } from "../data";
import Title from "../components/Title";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";

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
