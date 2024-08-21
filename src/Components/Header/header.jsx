import React from 'react'
import './header.css';
import CTA from './CTA';
// import ME from '../../Assets/me.png';
// import HeaderSocial from './header_socials';

const header = () => {
  return (
    <header>
        <div className="container header__container">
          {/* <h5> Hello I am </h5> */}
          <h1>Madhuka Devinda</h1>
          <h5 className="text-light">Software Engineer</h5>
          <CTA/>
          {/* <HeaderSocial/> */}

          {/* <div className="me">
            <img src={ME} alt='me' />
          </div> */}

          {/* <a href='#contact' className='scroll__down'>Scroll Down</a> */}
        </div>
    </header>
  )
}

export default header