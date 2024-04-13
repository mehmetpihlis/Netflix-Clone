import React from 'react'
import { GiTrophyCup } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className='mt-68'>
      <div className="header-content">
        <h2 style={{fontFamily: "Tilt Neon"}}>
        <span><GiTrophyCup color='gold'/></span>
        #1 in Movies Today
        </h2>
        <p style={{margin: "30px 0"}}>
        The main character, Bilbo Baggins, embarks on an unexpected adventure to the treasure-filled mountain of the dragon Smaug. Along the way, a journey filled with friendship, courage, and unexpected dangers begins.
        </p>
        <div id='header-control'>
            <button id='playBtn'>
                <FaPlay />&nbsp; Play
            </button>
            <button id='infoBtn'>
            <IoIosInformationCircleOutline size={26} />&nbsp;More Info
            </button>
        </div>
      </div>
      <div id='group'></div>
    </header>
  )
}

export default Header
