import React from 'react'
import classes from './NoRoute.module.css';
import { Link } from 'react-router-dom';

const NoRoute = () => {
  return (
    <div className={`container noroute_container}`}>
      <h1 className={classes.heading}>404 - Page Not Found</h1>
      <p className={classes.message}>
        The page you're looking for doesn't exist. Please check the URL or go back to the homepage.
      </p>
      <Link to="/" className={classes.link}>Go to Homepage</Link>
    </div>
  )
}

export default NoRoute