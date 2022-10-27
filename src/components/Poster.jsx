import React from "react";

const Poster = ({ movie }) => {
    return (
    <>
      <img src={movie.poster} alt={movie.title}></img>
    </>
    )
};

export default Poster;