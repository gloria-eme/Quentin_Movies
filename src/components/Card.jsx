import Title from "./Title";
import Poster from "./Poster";
// import { getCast } from "../data";
// import Cast from "./Cast";


const Card = ({ movie }) => {

  return (
    <section>
      <Title text={movie.title} />
      <Poster key={movie.id} movie={movie} />
      <p>Año: {movie.year}</p>
      {/* <div>
        <p>Reparto: {movie.actors}</p>
        <Cast/>
      </div> */}
    </section>
  );
};

export default Card;
