


const Cast = ({cast}) => {
    
  return (
    <>
        {cast.map((actor) => (
          <div className="divCast" key={actor.id}>
            <p className="p1">Name: {actor.name}</p>
            <p className= "p2">Personaje: {actor.role}</p>
          </div>
        ))}
     </>
  );
};

export default Cast;
