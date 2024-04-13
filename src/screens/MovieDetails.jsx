import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../api/key";
import {baseUrl} from "../api/api";

const MovieDetails = () => {
  

  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}
    `
      )
      .then((res) => {
        setMovie(res.data);
        
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  useEffect(() => {
    let genres = "";
    movie?.genres?.map((item) => genres += `, ${item.name}`);
    setGenres(genres);
  }, [movie]);

  return (
    <div id="movie-detail" className="mt-68">
      <div id="poster">
        <img src={baseUrl + movie.poster_path} alt="" />
      </div>
      <div id="content">
        <h1>{movie.title}</h1>
        <br />
        <h4>{movie?.release_date?.substring(0,4)} - {parseInt(movie.runtime/60)}h {movie.runtime%60}m</h4>
        <p>{movie.overview}</p>
        <br />
        <h5><span style={{fontSize: "16px", color: "gray"}}>Genres:</span> {genres?.substring(1)}</h5>
      </div>
    </div>
  );
};

export default MovieDetails;
