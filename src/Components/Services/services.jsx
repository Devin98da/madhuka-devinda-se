import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
              <h3>Game Development</h3>  
          </div> 

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop 2D games</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develope 3D games</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write stories</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Level design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design game</p>
            </li>

          </ul>

        </article>

        <article className='service'>
          <div className="service__head">
              <h3>Web Development</h3>  
          </div> 

          <ul className='service__list'>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>

        </article>

        <article className='service'>
          <div className="service__head">
              <h3>Content Creation</h3>  
          </div> 

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Make short films</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Make cinematic videos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Make marketing related vidoes</p>
            </li>

          </ul>

        </article>
      </div>
    </section>
  )
}

export default services