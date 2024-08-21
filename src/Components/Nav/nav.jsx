import React from 'react'
import './nav.css';
// import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaItchIo, FaLinkedin } from 'react-icons/fa';
// import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
// import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { ProjectsData } from '../ProjectsData';
// import { BsLinkedin } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import classes from './nav.module.css';

const Nav = () => {
  // const [activeNav, setActiveNav] = useState('#');
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  const mouseEnterHandler = () => {
    setIsDropDownVisible(true);
  }

  // const mouseLeaveHandler = () => {
  //   setIsDropDownVisible(false);
  // }

  const hambergerClickHandler = () => {
    setisMobile(!isMobile);
  }

  const onClickDrop = () => {
    setIsDropDownVisible(!isDropDownVisible);
  }

  return (
    // <div className="container nav__container">
    //   <nav>
    //     <Link to='/'>Home</Link>
    //     <Link>Professional Projects</Link>
    //     <Link onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
    //       Personal Projects
    //       {isDropDownVisible && <Dropdown projects={ProjectsData} />}

    //     </Link>
    //     <Link to='/about-resume' target='blank'>About & Resume</Link>
    //   </nav>
    // </div>

    <React.Fragment>
      <div className="container navbar">
        <div className='navlinks'>
          <Link className='link' to='/'>Home</Link>

          <div className="dropdown">
            <button className="dropbtn" onMouseEnter={mouseEnterHandler} >Proffesional Projects
              <i className="fa fa-caret-down"></i>
            </button>
            {isDropDownVisible &&
              <div className="dropdown-content">
                <Dropdown OnClickDropDown={onClickDrop} projects={ProjectsData} />
              </div>}
          </div>
          <Link className='link' to='/experience'>Experience</Link>

          <Link className='link' to='/about-resume'>About & Resume</Link>
        </div>
        <div className='hamberger' onClick={hambergerClickHandler}>
          {isMobile ? <AiOutlineClose /> : <GiHamburgerMenu />}

        </div>

        <div className='socials'>
          <a className='social' href='https://www.linkedin.com/in/madhuka-devinda/' target='blank' title='Linkedin'><FaLinkedin /></a>
          <a className='social' href='https:/facebook.com' target='blank' title='Facebook'><FaFacebookF /></a>
          <a className='social' href='https://github.com/Devin98da' target='blank' title='Github'><FaGithub /></a>
          {/* <a className='social' href='https://keema98.itch.io/' target='blank' title='Itch.io'><FaItchIo /></a> */}
        </div>

      </div>
      {
        <div className={`nav_links_mobile ${isMobile ? 'open' : ''}`}>
          <Link className='link' to='/' onClick={hambergerClickHandler}>Home</Link>

          <div className="dropdown">
            <button className="dropbtn" onMouseEnter={mouseEnterHandler}>Profesional Projects
              {/* <i class="fa fa-caret-down"></i> */}
            </button>
            {isDropDownVisible &&
              <div className="dropdown-content">
                <Dropdown OnClickDropDown={hambergerClickHandler} projects={ProjectsData} />
              </div>}
          </div>
          <Link className='link' to='/experience' onClick={hambergerClickHandler}>Experience</Link>
          <Link className='link' to='/about-resume' onClick={hambergerClickHandler}>About & Resume</Link>
        </div>
      }

    </React.Fragment>
  )
}

export default Nav