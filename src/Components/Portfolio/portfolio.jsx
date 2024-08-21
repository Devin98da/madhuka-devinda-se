import React from 'react'
import './portfolio.css';

import { Link } from 'react-router-dom';
import { ProjectsData } from '../ProjectsData';

const portfolio = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: smooth scrolling animation
    })
  }

  return (
    <section id='portfolio'>
      {/* <h5>My Recent Work</h5> */}
      <h2>Professional Projects</h2>

      <div className="container portfolio__container">
        {
          ProjectsData.map(({ id, image, title, github, demo, summary }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{summary}</p>
                <ul>
                  {
                    // Object.keys(summary_list).map((key) => {
                    //   return <li key={key} >{obj[key]}</li>
                    // })
                  }
                </ul>
                <div className="portfolio__item-cta">
                  <a href={demo} target='blank' className='btn'>Live</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>More...</a> */}
                  <Link to={`/projects/${title}`} onClick={scrollToTop} className='btn btn-primary'>More....</Link>
                </div>
              </article>
            )
          })
        }

      </div>


    </section>
  )
}

export default portfolio