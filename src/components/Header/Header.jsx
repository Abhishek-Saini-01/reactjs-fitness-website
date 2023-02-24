import React, { useState } from 'react'
import './Header.css'
import logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"

import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="header">
        <img className='logo' src={logo} alt="" />
        {(menuOpened === false && mobile === true)? (
          <div
          style={{backgroundColor: "var(--appColor)", padding: '0.5rem', borderRadius:'5px'}}
          onClick={() => setMenuOpened(true)}
          >
            <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/>
          </div>
        ):
        <ul className='header_menu'>
            <li ><Link to='hero' onClick={() => setMenuOpened(false)}>Home</Link></li>
            <li ><Link to='programs' onClick={() => setMenuOpened(false)}>Programs</Link></li>
            <li ><Link to='reasons' onClick={() => setMenuOpened(false)}>Why Us</Link></li>
            <li ><Link to='plans' onClick={() => setMenuOpened(false)}>Plans</Link></li>
            <li ><Link to='testimonials' onClick={() => setMenuOpened(false)}>Testimonials</Link></li>
        </ul>
        }
        
    </div>
  )
}

export default Header