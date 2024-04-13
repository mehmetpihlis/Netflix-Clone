import React from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../api/api";

const Carousel = ({ movies, id }) => {

  return (
      <div id={`carouselExample${id}`} className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to={`/moviedetails/${movies[0]?.id}`}>
              <img src={baseUrl + movies[0]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[1]?.id}`}>
              <img src={baseUrl + movies[1]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[2]?.id}`}>
              <img src={baseUrl + movies[2]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[3]?.id}`}>
              <img src={baseUrl + movies[3]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[4]?.id}`}>
              <img src={baseUrl + movies[4]?.backdrop_path} alt="filmPoster" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={`/moviedetails/${movies[5]?.id}`}>
              <img src={baseUrl + movies[5]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[6]?.id}`}>
              <img src={baseUrl + movies[6]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[7]?.id}`}>
              <img src={baseUrl + movies[7]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[8]?.id}`}>
              <img src={baseUrl + movies[8]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[9]?.id}`}>
              <img src={baseUrl + movies[9]?.backdrop_path} alt="filmPoster" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={`/moviedetails/${movies[10]?.id}`}>
              <img src={baseUrl + movies[10]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[11]?.id}`}>
              <img src={baseUrl + movies[11]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[12]?.id}`}>
              <img src={baseUrl + movies[12]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[13]?.id}`}>
              <img src={baseUrl + movies[13]?.backdrop_path} alt="filmPoster" />
            </Link>
            <Link to={`/moviedetails/${movies[14]?.id}`}>
              <img src={baseUrl + movies[14]?.backdrop_path} alt="filmPoster" />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselExample${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carouselExample${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
  );
};

export default Carousel;
