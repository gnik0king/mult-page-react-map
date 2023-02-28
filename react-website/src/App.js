import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/index'
import About from './pages/about';
import Contact from './pages/contact';
import Blogs from './pages/blogs';
import Listing from './pages/listing';
import Home from './pages/index';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/blogs' element={<Blogs/>}/>
        <Route exact path='/listing' element={<Listing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
