import './App.css';
import Header from './components/Header/index'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home/index';
import About from './components/About/index';
import Contact from './components/Contacts/index';
import Projects from './components/Projects/index';

function App() {
  return (
    <div className="App">
      <Header />
     <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
