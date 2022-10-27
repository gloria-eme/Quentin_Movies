import { getMovie } from "../data";
import { useState, useEffect } from "react";
// import { useParams} from "react-router-dom";
import Card from "./Card";

const Form = () => {
    // const { id } = useParams();
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [year, setYear] = useState(0);
    const [movie, setMovie] = useState([]);

  const createMovie = (ev) => {
    ev.preventDeFault();
    const newMovie = {
      id: id,
      title: title,
      poster: poster,
      year: year,
    };
   
  };

  return (
    <div>
      <form onSubmit={(ev) => createMovie(ev)}>
        <fieldset>
          <legend>Add a Quentin movie</legend>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(ev) => {
                console.log(movie)
                setTitle(ev.target.value)}}
          />
          <label htmlFor="poster">Url Poster:</label>
          <input
            type="text"
            name="poster"
            id="poster"
            onChange={(ev) => setPoster(ev.target.value)}
          />
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            name="year"
            id="year"
            min={1980}
            onChange={(ev) => setYear(ev.target.value)}
          />
        </fieldset>
        <input type="submit" value="Create" />
      </form>
      <Card movie={movie}/>
    </div>
    
  );
};


export default Form;
