import React, {useContext} from 'react';
import searchContext from "../context/search-context";
import { baseUrl } from "../api/api";
import { Link } from "react-router-dom";

const SearchList = ({movies}) => {

    const { setSearchValue, searchValue } = useContext(searchContext);

  return (
    <div id='search-list' className='mt-68'>
      {
        (movies?.length !== 0) ? (
            movies?.map((item) => {
                return (
                    <Link key={item?.id} to={`/moviedetails/${item?.id}`} onClick={() => setSearchValue("")}>
                    <img src={baseUrl + item?.poster_path} alt='poster' />
                    </Link>
                )
            })
        ) : (
            <div id='not-found'>
                <p>Your search for "{searchValue}" did not have any matches.</p>
                <br />
                <p>Suggestions:</p>
                <ul>
                    <li>Try different keywords</li>
                    <li>Looking for a movie or TV show?</li>
                    <li>Try using a movie, TV show title, an actor or director</li>
                    <li>Try a genre, like comedy, romance, sports, or drama</li>
                </ul>
            </div>
        )
      }
    </div>
  )
}

export default SearchList
