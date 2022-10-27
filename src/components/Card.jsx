import Title from "./Title";
import Poster from "./Poster";
import Cast from "./Cast";



const Card = ({ movie }) => {

  return (
    <section>
      <Title text={movie.title} />
      <Poster key={movie.id} movie={movie} />
      <p>Año: {movie.year}</p>
     <Cast cast={movie.actors} />
    </section>
  );
};

export default Card;
