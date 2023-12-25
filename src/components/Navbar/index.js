import {Link} from 'react-router-dom'
import sivajiresume from '../Images/sivajiresume.pdf'
import { MdOutlineFileDownload } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import logo1 from '../Images/logo1.gif'


import './index.css'
import { useState } from 'react';

const Navbar = () => {
 
  const [open,setOpen]=useState(false)
  

  const onClickMenu=()=>{
    setOpen(prevState=>!open)
  }



  

 

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
    
          <img src={logo1} width='210' height='70' alt='website logo'/>
          
          {open?
          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickMenu}
          >
          <MdOutlineClose style={{fontSize:'28px'}}/> </button>:  
           <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickMenu}
          ><GiHamburgerMenu style={{fontSize:'28px'}} /></button>}
            
          
        </div>

        <div className="nav-bar-large-container">
          
          <img src={logo1} width='250' height='80' alt='website logo'/>
          
          <ul className="nav-menu">
          <Link to='/' style={{textDecoration:'none',marginTop:'15px'}} className='list-item'><li className="nav-menu-item">
         
                Home
             
            </li></Link> 

            <Link to='/about' style={{textDecoration:'none',marginTop:'15px'}} className='list-item'>  <li className="nav-menu-item">
         
         About
      
     </li></Link>

     <Link to='/projects' style={{textDecoration:'none',marginTop:'15px'}} className='list-item'> <li className="nav-menu-item">
             
                Projects
             
            </li></Link>

            <Link to='/contact' style={{textDecoration:'none',marginTop:'15px'}} className='list-item'>  <li className="nav-menu-item">
           
                Contact
              
            </li></Link>
          </ul>
          {/* <button
            type="button"
            className="logout-desktop-btn"
            // onClick={onClickLogout}
          >
            Logout
          </button> */}
           <button className='logout-desktop-btn'>
                            <a href={sivajiresume} download='resume' target="_blank"
                                rel="noreferrer" style={{ textDecoration: "none", color: 'black', fontSize: '20px' }}
                            >
                                Get Resume
                            </a>
                            <MdOutlineFileDownload className='down-icon' style={{color:'black'}}/>
                        </button>
        </div>
       {open&&<div className='mobile-menu'>
            <ul style={{listStyleType:'none'}}>
            <Link to='/' style={{textDecoration:'none',marginTop:'30px'}} className='menu-item' > <li>Home</li></Link> 
            <Link to='/about' style={{textDecoration:'none',marginTop:'30px'}} className='menu-item' > <li>About</li></Link>
            <Link to='/projects' style={{textDecoration:'none',marginTop:'30px'}} className='menu-item' >  <li >Projects</li></Link>
              <Link to='/contact' style={{textDecoration:'none',marginTop:'30px'}} className='menu-item' > <li >Contact</li></Link>
            </ul>
        </div>}
      </div>
      {/* <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
         
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
         
          </li>

          <li className="nav-menu-item-mobile">
           
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
          
          </li>
          <li className="nav-menu-item-mobile">
        
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
            
         
          </li>
        </ul>
      </div> */}

    </nav>
  )
}

export default Navbar