import React from 'react'
// import Header from './Components/Header/header';
import Nav from './Components/Nav/nav';
// import About from './Components/About/about';
import Experiance from './Components/Experience/experiance';
// import Services from './Components/Services/services';
// import Portfolio from './Components/Portfolio/portfolio';
// import Testermonial from './Components/Testemonial/testemonial';
// import Contact from './Components/Contact/contact';
// import Footer from './Components/Footer/footer';
import { Route, Routes } from 'react-router-dom';
import ProfesionalProject from './Components/Portfolio/Porjects/Proffesional/ProfesionalProject';
import PersonalProject from './Components/Portfolio/Porjects/Personal/PersonalProject';
import Home from './Components/Home/Home';
import About_Resume from './Components/About_Resume/About_Resume';
import NoRoute from './Components/NoRoute/NoRoute';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Nav /> */}
      {/* <About />  */}
      {/* <Experiance /> */}
      {/* /* <Services /> */}
      {/* <Routes>
        <Route path='/' element={<About/>}></Route>
        <Route path='/' element={<Portfolio />}></Route>
        <Route path='/projects/:projectId' element={<PersonalProject />}></Route>
        <Route path='/' element={<Contact/>}></Route>
      </Routes> */}
      {/* <Portfolio/> */}
      {/* <Testermonial /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <Nav />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects/:projectId' element={<ProfesionalProject />}></Route>
        <Route path='/myprojects/:projectId' element={<PersonalProject />}></Route>
        <Route path='/experience' element={<Experiance/>}></Route>
        <Route path='/about-resume' element={<About_Resume/>}></Route>
        <Route path='/*' element={<NoRoute/>}></Route>

      </Routes>
    </>
  )
}

export default App