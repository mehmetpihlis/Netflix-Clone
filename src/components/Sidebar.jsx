import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const closeAside = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open");
  }

  return (
    <aside id="sidebar">
      <div id="aside-content">
        <Link to={"/"} onClick={closeAside}>Home</Link>
        <Link to={"/series"} onClick={closeAside}>TV Shows</Link>
        <Link to={"/movies"} onClick={closeAside}>Movies</Link>
        <Link to={"/popular"} onClick={closeAside}>New & Popular</Link>
        <Link to={"/mylist"} onClick={closeAside}>My List</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
