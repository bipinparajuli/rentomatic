import {Route,Routes,BrowserRouter} from 'react-router-dom'
import { NotificationsProvider } from '@mantine/notifications';
import ChatBot from 'react-simple-chatbot';

import './App.css';
import NavBar from './NavBar/NavBar';
import Hero from './hero/Hero';
import Registration from './Registration/Registration';
import Footer from './footer/footer'
import Login from './Login/login';
import Forget from './Forget/Forget';
import CreateOwnerAccount from './createOwnerAccount/CreateOwnerAccount'
import CreateTenantAccount from './createTenantAccount/createTenantAccount';
import FindRoom from './findroom/FindRoom';
import FindTenant from './findtenant/findTenant'
import Listing from './listing/Listing';
import TenantProfile from './listing/TenantProfile';

//new
function App() {
  const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];
  return (
    <>      
    <BrowserRouter>
    <NavBar />
    <NotificationsProvider>

    <Routes>
      
      <Route path="/" element={<Hero />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<Forget />}/>
      <Route path="/createOwnerAccount" element={<CreateOwnerAccount />}/>
      <Route path="/createTenantAccount" element={<CreateTenantAccount />}/>
      <Route path="/findRoom" element={<FindRoom/>}/>
      <Route path="/findTenant" element={<FindTenant/>}/>
      <Route path="/room/:id" element={<Listing/>}/>
      <Route path="/tenantprofile/:id" element={<TenantProfile/>}/>


  
    </Routes>
    </NotificationsProvider>

    </BrowserRouter>
    <ChatBot steps={steps} />
    <Footer />
    </>
  );
}

export default App;
