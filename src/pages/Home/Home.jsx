import React from "react";
import Title from "../../components/Title";

const title = "Quentin Tarantino Movies";

const Home = () => {
  return (
    <>
      <Title className="h1HOme"text={title} />
      <p>
        Aquí tenéis algunas películas de Quentin Tarantino. ¿Echáis en falta
        alguna que os guste?
      </p>
    </>
  );
};

export default Home;
