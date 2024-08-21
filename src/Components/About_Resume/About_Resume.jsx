import React from 'react'
import About from '../About/about';
import Page1 from '../../Assets/page1.jpg';
import Page2 from '../../Assets/page2.jpg';
import classes from './About_Resume.module.css';
import Footer from '../Footer/footer';
import Contact from '../Contact/contact';

const About_Resume = () => {
    return (
        <section> 
            <About home={false}/>
            <div className={`container ${classes.about_resume_container}`}>
                {/* <div>
                    <h2 className={classes.title}>About Me</h2>
                </div> */}
               
                <div className={classes.resume_content}>
                    <hr></hr>

                    <h2 className={classes.title}>Resume Preview</h2>
                    <div className={classes.images}>
                        <img alt='Page 1' src={Page1} />
                        <img alt='Page 2' src={Page2} />
                    </div>
                </div>
            </div >
            <Contact/>
            <Footer />
        </section>
    )
}

export default About_Resume