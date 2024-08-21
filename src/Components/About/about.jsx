import React from 'react'
import './about.css';
import Me from '../../Assets/me-about.jpg';
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';
import CTA from '../Header/CTA';

const about = ({ home }) => {

  let aboutContent = "";

  if (home) {
    aboutContent = <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Me} alt='About Image' />
        </div>
      </div>

      <div className="about__content">
        {/* <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Pojects</h5>
            <small>2+ completed</small>
          </article>
        </div> */}
        <p>
          Hello! I'm Madhuka Devinda, a dedicated Software Engineer Intern with 10 months of hands-on experience in Full Stack Development, 
          specializing in the MEAN stack. Skilled in Angular for frontend and Express.js/Node.js for backend development, 
          I excel in creating robust, scalable solutions. 
          I am passionate about leveraging my technical expertise to collaborate effectively within cross-functional teams. 
          With a strong foundation in TypeScript and MongoDB, I am committed to delivering seamless user experiences 
          and optimizing application performance. Eager to contribute innovation and problem-solving skills to dynamic projects,
           I am poised to make significant contributions to any team.
        </p>
        {/* <p>
          In my more than one-year professional journey, I've had the opportunity to work on a diverse range of projects, each of project is heped to my growth as a game developer.
          From conceptualization to implementation, I've been involved in various aspects of game development, developing my coding skills, design, problem solving and story telling.
        </p>
        <p>
          My technical toolkit includes proficiency in Unity, C#, Adobe Photoshop, allowing me to bring ideas to life.
        </p>
        <p>
          I published my first 3D horror survival game on itch.io, and hope to publish more games in future.
        </p>
        <p>
          What sets me apart is not just my technical expertise but also my enthusiasm for innovation. I always need to explore new things in game development and designs.
          I am always eager to bring fresh and exciting ideas to the world with game mechanics and game stories.
        </p>
        <p>
          To me, game development is not just a profession; It's about creating worlds, telling stories, and providing players with unforgettable experiences.
          I am commited to contributing to the gaming industry and making a good positive impact through my work.
        </p>

        <p>
          Thank you for visiting my portfolio, and I look forward to the exciting challenges and opportunities that lie ahead in the world of game development!
        </p> */}

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>

    </div>
  } else {
    aboutContent = <div className="container about__container">
      <div className="resume_image">
        <div className='about_me_resume'>
          <div className="about_me_resume-image">
            <img src={Me} alt='About Image' />
          </div>

        </div>
        <CTA />
      </div>

      <div className="about__content">
        {/* <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Pojects</h5>
            <small>2+ completed</small>
          </article>
        </div> */}
        <p>
        Hello! I'm Madhuka Devinda, a passionate Software Engineer Intern with 10 months of hands-on experience in Full Stack Development, 
        specializing in the MEAN stack. My journey in the world of software engineering has been both challenging and rewarding,
         and I thrive on the opportunities to collaborate, innovate, and create scalable solutions.
        </p>
        <p>
        Throughout my professional journey, I've had the privilege of working on a variety of projects, 
        each contributing to my growth as a developer. From front-end development with Angular to back-end development with Node.js, 
        I have honed my skills in creating responsive, user-friendly interfaces and robust server-side logic. 
        My proficiency in TypeScript and MongoDB has enabled me to deliver seamless user experiences and optimize application performance.
        </p>
        <p>
        One of my significant projects was with Efito Solutions, where I played a crucial role in developing the Builder Bid application.
         This experience allowed me to work closely with cross-functional teams, enhancing my collaborative problem-solving skills 
         and reinforcing the importance of agile development processes.
        </p>
        <p>
        In addition to my technical skills, I am deeply committed to continuous improvement. 
        Staying updated with the latest industry trends and technologies is a priority for me, and 
        I actively incorporate best practices to enhance the development workflow.
        </p>
        <p>
        My technical toolkit includes:
          <ul>
            <li>Front-end Development: Angular, React</li>
            <li>Back-end Development: Node.js, Express.js</li>
            <li>Databases: MongoDB</li>
            <li>Programming Languages: C#, JavaScript, TypeScript</li>
            <li>Other Tools: GIT, Unity, OOP</li>
          </ul>

        </p>
        <p>
        Beyond my technical expertise, what sets me apart is my enthusiasm for innovation and my passion for creating impactful solutions. 
        I am always eager to explore new technologies and methodologies, bringing fresh and exciting ideas to the table.
        </p>

        <p>
        Thank you for visiting my portfolio. I look forward to the exciting challenges 
        and opportunities that lie ahead in the field of software engineering, 
        and I am committed to making a positive impact through my work.
        </p>

        {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}

      </div>

    </div>
  }

  return (
    <section id='about'>
      {/* <h5>get To Know</h5> */}
      <h2>About Me</h2>
      {aboutContent}
    </section>
  )
}

export default about