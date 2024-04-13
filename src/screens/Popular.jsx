import React, {useEffect, useState} from 'react'
import Header from "../components/Header";
import { getMovies } from "../api/api";
import { API_KEY } from "../api/key";
import Section from '../components/Section';


const Popular = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [from1990s, setFrom1990s] = useState([]);
  const [turkishMovies, setTurkishMovies] = useState([]);

  useEffect(() => {
    getMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, setPopularMovies);
    getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`, setActionMovies);
    getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`, setHorrorMovies);
    getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31`, setFrom1990s);
    getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=tr`, setTurkishMovies);
  }, []);

  return (
    <>
    <Header />
    <div className="home mt-68">
      <Section title={"Popular on Netflix"} movies={popularMovies} id={0} />
      <Section title={"Action Movies"} movies={actionMovies} id={1} />
      <Section title={"Horror Movies"} movies={horrorMovies} id={2} />
      <Section title={"Movies from the 1990s"} movies={from1990s} id={3} />
      <Section title={"Turkish Movies"} movies={turkishMovies} id={4} />
    </div>
    </>
  )
}

export default Popular
