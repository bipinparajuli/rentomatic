import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom"
import Logo from '../assets/logo.png'

function NavBar() {
  return (
    <>
    <nav>
      <Link to={'/'}>
        <img src={Logo} />
      </Link>

        <ul>
            <li><Link to={`/tenent`}>Tenant</Link></li>
            <li><Link to={`/rent`}>Rent</Link></li>
            <li><Link to={`/login`}>Login</Link></li>
            <li><Link to={`/register`}>Register</Link></li>
            <li><Link to={'/forget'}>Forget Password</Link></li>
            <li><Link to={'/createOwnerAccount'}>Create Owner Account</Link></li>
            <li><Link to={'/createTenantAccount'}>Create Tenant Account</Link></li>
            <li><Link to={'/findRoom'}>Find Room</Link></li>
            <li><Link to={'/findTenant'}>Find Tenant</Link></li>
            
        </ul>
    </nav>
    
    </>
  )
}

export default NavBar