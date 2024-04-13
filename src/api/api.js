import axios from "axios";

export const getMovies = (endpoint, setFunc) => {
    axios
      .get(
        endpoint
      )
      .then((res) => setFunc(res.data.results))
      .catch((err) => console.log(err));
};

export const baseUrl = "https://image.tmdb.org/t/p/w500";