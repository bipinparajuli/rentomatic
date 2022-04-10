import {Route,Routes,BrowserRouter} from 'react-router-dom'
import { NotificationsProvider } from '@mantine/notifications';
import ChatBot from 'react-simple-chatbot'; //chat bot lib
import {FaFacebookMessenger} from 'react-icons/fa'

import './App.css';
import NavBar from './NavBar/NavBar';
import Hero from './hero/Hero';
import Registration from './Registration/Registration';
import Footer from './footer/footer'
import Login from './Login/login';
import Profile from './Profile/Profile';

import Forget from './Forget/Forget';
import CreateOwnerAccount from './createOwnerAccount/CreateOwnerAccount'
import CreateTenantAccount from './createTenantAccount/CreateTenantAccount';
import FindRoom from './findroom/FindRoom';
import FindTenant from './findtenant/findTenant'
import Listing from './listing/Listing';
import TenantProfile from './listing/TenantProfile';
import { useState } from 'react';

//new
function App() {

  const[showbot,setShowBot] = useState(false)


//  let e=document.getElementsByClassName("rsc-header")
//  console.log(e);

//  e.style.color = "red"


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
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/findTenant" element={<FindTenant/>}/>
      <Route path="/room/:id" element={<Listing/>}/>
      <Route path="/tenantprofile/:id" element={<TenantProfile/>}/>
      <Route path='/profile' element={<Profile/>}/>


  
    </Routes>
    </NotificationsProvider>

    </BrowserRouter>
    <div
    style={{position:'fixed',bottom:"32px",right:"12px"}}
    >

    {
      showbot ? <ChatBot
      // onClick={{}}
    onClick={()=>setShowBot(!showbot)}

      style={{
        position: "-webkit-sticky !important",
        position: "fixed !important",
        bottom: "95px !important",
        right: "30px !important"
      }}
       steps={[
        {
          id: '1',
          //chat bot messege
          message: 'Hi, how can i help you?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'messege',
          trigger: '4',
        },
  
  
  
        {
          id: '4',
          user: true,
          trigger: '5',
        },
        {
          id: '5',
          message: 'helo',
          trigger: '6',
        },
        {
          id: '6',
          user: true,
          trigger: '7',
        },
        {
          id: '7',
          message: ',.......?',
          end: true,
        }]}
    /> : 
    <FaFacebookMessenger
cursor="pointer"
onClick={()=>setShowBot(!showbot)}
    size={40}


    />

}
</div>

    
   
    <Footer />
    </>
  );
}

export default App;
