import React, { useContext } from 'react';
import searchContext from "../context/search-context";
import Logo from "../assets/Netflix_Logo.png";
import { NavLink } from "react-router-dom";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

  const { setSearchValue, searchValue } = useContext(searchContext);

  return (
    <nav>
      <div className="primary-navigation">
        <div className="logo-space">
          <img src={Logo} alt='logo' />
        </div>
        <ul id='navlist' className="navigation-list">
          <li>
            <NavLink to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/series"}>
            TV Shows
            </NavLink>
          </li>
          <li>
            <NavLink to={"/movies"}>
            Movies
            </NavLink>
          </li>
          <li>
            <NavLink to={"/popular"}>
            New & Popular
            </NavLink>
          </li>
          <li>
            <NavLink to={"/mylist"}>
            My List
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="secondary-navigation">
        <div id='searchbar' className="search-bar">
          <button onClick={() => {
            setSearchValue("");

            // SearchBar Open-Close
            const searchBar = document.getElementsByClassName("search-bar")[0];
            searchBar.classList.toggle("active-search");

            // SearchInp Toggle
            const searchInp = document.getElementById("search-inp");
            searchInp.classList.toggle("close");

          }}>
            <IoSearchOutline />
          </button>
          <input 
            id='search-inp' 
            className='close' 
            type="text" 
            placeholder='Titles, people, genres' 
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            autoComplete='off'
          />
          {
            searchValue && (
              <button id='clear-btn' onClick={() => setSearchValue("")}>
           <IoCloseOutline />
          </button>
            )
          }
        </div>
        <button id='toogleBtn' onClick={() => {
          const sidebar = document.getElementById("sidebar");
          sidebar.classList.toggle("open");
        }}>
        <RxHamburgerMenu id='open' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
