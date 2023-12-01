import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'


function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contanto</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/> 
        <Route  path='/company' element={<Company/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/newproject' element={<NewProject/>}/>
      </Routes>
    </Router>
  );
}

export default App;
