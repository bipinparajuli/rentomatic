import {Route,Routes,BrowserRouter} from 'react-router-dom'


import './App.css';
import NavBar from './NavBar/NavBar';
import Hero from './hero/Hero';
import Registration from './Registration/Registration';
import Footer from './footer/footer'
import Login from './Login/login';
import Forget from './Forget/Forget';
import CreateOwnerAccount from './createOwnerAccount/createOwnerAccount'
import CreateTenantAccount from './createTenantAccount/createTenantAccount';
import FindRoom from './findroom/FindRoom';
import FindTenant from './findtenant/findTenant'
import Listing from './listing/Listing';
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
      <Route path="/forget" element={<Forget />}/>
      <Route path="/createOwnerAccount" element={<CreateOwnerAccount />}/>
      <Route path="/createTenantAccount" element={<CreateTenantAccount />}/>
      <Route path="/findRoom" element={<FindRoom/>}/>
      <Route path="/findTenant" element={<FindTenant/>}/>
      <Route path="/listing" element={<Listing/>}/>
    </Routes>
    </BrowserRouter>
  
    <Footer />
    </>
  );
}

export default App;
