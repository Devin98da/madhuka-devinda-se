import React from 'react'
import Header from '../Header/header';
// import Nav from '../Nav/nav';
import About from '../About/about';
import Portfolio from '../Portfolio/portfolio';
import Footer from '../Footer/footer';
// import PersonalProject from '../Portfolio/Porject/PersonalProject';
import Contact from '../Contact/contact';
import OlderProjects from '../Portfolio/OlderProjects/OlderProjects';
// import { Route, Routes } from 'react-router-dom';


const Home = () => {
    return (
        <div>

            <Header />
            {/* <hr></hr> */}
            <About home= {true}/>
            {/* <Experiance /> */}
            {/* /* <Services /> */}
            {/* <Routes>
                <Route path='/' element={<About />}></Route>
                <Route path='/' element={<Portfolio />}></Route>
                <Route path='/projects/:projectId' element={<PersonalProject />}></Route>
                <Route path='/' element={<Contact />}></Route>
            </Routes> */}
            <Portfolio />
            <OlderProjects />
            {/* <Routes>

            </Routes> */}
            {/* <Testermonial /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default Home