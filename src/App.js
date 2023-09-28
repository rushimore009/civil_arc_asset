import logo from './logo.svg';
import './App.css';
import './Front1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';

import {Helmet} from "react-helmet";
import Buy from './pages/Buy';
import Front from './pages/Front';


function App() {
  return (
    
   <BrowserRouter>
  <div>
  <Helmet>
                <meta charSet="utf-8" />
                <title>civil_arc_</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
            </Helmet>
      <Routes>
          <Route path='front' element={<Front/>}/>
          <Route path='/' element={ <Home /> } />
          <Route path='home' element={ <Home /> } />
          <Route path='Buy' element={ <Buy/> } />
          <Route path='Login' element={ <Login /> } />
          <Route path='Signup' element={ <Signup /> } />
          <Route path='About' element={ <About/>} />
          
         
      </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
