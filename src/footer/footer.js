import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css';



function Footer() {
  return (<>
  <hr className='foot-line' ></hr>
    <footer class="footer">
       
        <ul class="footer-right">
            <div>
            <h1>lOGO</h1>
            <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam reprehenderit recusandae doloribus expedita neque praesentium magni hic, quod vero, officiis sunt sint dolores! Atque, dolorem consectetur voluptatum consequuntur odit possimus corrupti veritatis quisquam! Lorem, ipsum dolor.lorem34

            </p>
        </div>
            <li>
                <h2>Links</h2>

                <ul class="box">
                <li>
                    <Link to={'/findroom'}>ROOMS</Link>

                </li>
                <li>
                    <Link to={'/findtenant'}>TENANT</Link>
                </li>
                <li>
                    <Link to={'/privacy'} >FEATURES</Link>
                </li>
            </ul>
            </li>
            <li class="info">
                <h2>INFO</h2>
            <ul class="box">
                <li>
                    <Link to={'/faq'}>FAQ's </Link>
                    </li>
                <li>
                    <Link to={'/privacy'} >PRIVACY POLICY </Link>
                    </li>
            </ul>
        </li>
        <li>
            <h2>CONTACT US</h2>
            <ul class="box info">
            <li>Koteshwor,Kathmandu,Nepal</li>
            <li>01-5200033|+977 9849075353</li>
            <li>info@rentomaticrooms.com</li>
        </ul>
        </li>
        </ul>

        <hr className='foot-line' />
        <p style={{textAlign:"center"}} >Rentomatic Room All right Reserved</p>


    </footer>
  </>

  )
}

export default Footer
