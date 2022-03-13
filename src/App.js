import {Route,Routes,BrowserRouter} from 'react-router-dom'


import './App.css';
import NavBar from './NavBar/NavBar';
import Hero from './hero/Hero';
import Registration from './Registration/Registration';
import Footer from './footer/footer'
import Login from './Login/login';

//new
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      
      <Route path="/" element={<Hero />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </BrowserRouter>
  
    <Footer />
    </>
  );
}

export default App;
