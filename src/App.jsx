import "./styles/css/index.css";
import { useState, useEffect } from "react";
import { getMovies } from "./api/api";
import { API_KEY } from "./api/key";
import Home from "./screens/Home";
import Series from "./screens/Series";
import Movies from "./screens/Movies";
import MyList from "./screens/MyList";
import Popular from "./screens/Popular";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SearchList from "./components/SearchList";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./screens/MovieDetails";
import searchContext from "./context/search-context";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`, setMovies);
  }, [searchValue]);


  return (
    <>
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <Navbar />
        <Sidebar />
        {searchValue ? (
          <SearchList movies={movies} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
          </Routes>
        )}
      </searchContext.Provider>
    </>
  );
}

export default App;
