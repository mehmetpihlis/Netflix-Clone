import React from "react";
import Carousel from "./Carousel";

const Section = ({ title, movies, id }) => {
  return (
    <div style={{ marginTop: "35px" }}>
      <h3 style={{
          color: "white",
          paddingLeft: "30px"
        }}>{title}</h3>
      <Carousel movies={movies} id={id} />
    </div>
  );
};

export default Section;
