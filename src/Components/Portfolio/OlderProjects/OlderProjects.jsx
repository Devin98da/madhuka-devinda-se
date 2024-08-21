import React from 'react'
import './OlderProjects.css';
import { Link } from 'react-router-dom';
import { MyProjectsData } from '../../OlderProjectsData';

const OlderProjects = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Optional: smooth scrolling animation
        })
    }

    return (
        <section id='a'>
            <h2>Personal Projects</h2>

            <div className="container">
                <div className='olderProjects__container'>
                    {
                        MyProjectsData.map(({ id, image, title, summary, role, tech, demo }) => {
                            return (
                                <article key={id} className='olderProject__item'>
                                    <div className="olderProject__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{summary}</p>
                                        <p>Role - {role}</p>
                                        <p>Tech - {tech}</p>
                                    </div>
                                    <div className="portfolio__item-cta">
                                        <a href={demo}  target='blank' className='btn'>Demo</a>
                                        {/* <a href={demo} className='btn btn-primary' target='_blank'>More...</a> */}
                                        <Link to={`/myprojects/${title}`} onClick={scrollToTop} className='btn btn-primary'>More....</Link>
                                    </div>

                                </article>

                            )
                        })
                    }
                </div>
            </div>


        </section>
    )
}

export default OlderProjects