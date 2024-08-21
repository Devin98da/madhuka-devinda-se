import React from 'react'
import './footer.css';
import { FaFacebookF, FaGithub, FaItchIo, FaLinkedin } from 'react-icons/fa';
// import { IoLogoTwitter } from 'react-icons/io';

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Madhuka Devinda</a>

      {/* <ul className='premalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='about'>About</a></li>
        <li><a href='experience'>Experience</a></li>
        <li><a href='services'>Services</a></li>
        <li><a href='portfolio'>Portfolio</a></li>
        <li><a href='testimonials'>Testimonials</a></li>
        <li><a href='contact'>Contact</a></li>
      </ul> */}

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/madhuka-devinda/' target='blank' title='Linkedin'><FaLinkedin /></a>
        <a href='https:/facebook.com/madhuka-devinda' target='blank' title='Facebook'><FaFacebookF /></a>
        <a href='https://github.com/Devin98da' target='blank' title='Github'><FaGithub /></a>
        {/* <a href='https://keema98.itch.io/' target='blank' title='Itch.io'><FaItchIo /></a> */}
      </div>

      <div className="footer__copyright">
        <small className='copyright_text'>&copy; Madhuka Devinda. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default footer