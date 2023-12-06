import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'

import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Footer from './components/layout/Footer'





function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>        
            <Route exact path='/' element={<Home/>}/> 
            <Route  path='/projects' element={<Projects/>}/>
            <Route  path='/company' element={<Company/>}/>
            <Route  path='/contact' element={<Contact/>}/>
            <Route  path='/newproject' element={<NewProject/>}/>        
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
