import React from "react";

const Poster = ({ movie }) => {
    return (
    <>
      <img className="imgPoster" src={movie.poster} alt={movie.title}></img>
    </>
    )
};

export default Poster;