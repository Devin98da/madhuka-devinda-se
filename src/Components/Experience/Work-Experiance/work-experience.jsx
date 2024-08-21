import React from 'react'
import './work-experience.css';

const WorkExperience = () => {
  return (
    <div className="container ">
      <div className='work-experience'>
        <div className='duration'>
          <p> June 2022 – April 2023</p>
        </div>
        <div className='details'>
          <h3>Software Engineer Internship</h3>
          <p>Efito Solutions (Pvt) Ltd</p>

          <p>Project: <a href="https://builderbid.com/" target="_blank">Builder Bid</a></p>

          <p>Responsibilities:</p>
          <ul>
            <li>Front-end Development with Angular</li>
            <li>Back-end Development with Node.js</li>
            <li>TypeScript Development</li>
            <li>Database Management with MongoDB</li>
            <li>Collaborative Problem Solving</li>
          </ul>
        </div>
        
      </div>

    </div>
  )
}

export default WorkExperience