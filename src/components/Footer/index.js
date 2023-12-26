import './index.css'
import logo from '../Images/logo.gif'
import twitter from '../Images/twitter.gif'
import github from '../Images/github.gif'
import facebook from '../Images/facebook.gif'
import linkedin from '../Images/linkedin.gif'
const Footer = () => {
    return (

        <>
            <div className='footer-container'>
                <div className='footer-about-container'>
                <div className='respon-container'>
                <div>
                    <img src={logo} width='250' height='70' alt='website logo' />

                    <p className='footer-text'>I'm passionate frontend developer from India and building the Front-end of Websites and Web Applications.</p>
                </div>
                <div>
                <h1 style={{color:'#ff57a3',fontSize:'20px'}}>Follow Us</h1>
                <div className='icon-container'>
                    
                <a target="_blank"  rel="noreferrer" href="https://twitter.com/"><img src={twitter} className='icon'/></a> 
                <a target="_blank" rel="noreferrer" href="https://github.com/SivajiJagadabi"><img src={github}/></a> 

                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sivajijagadabi/"><img src={linkedin}/></a> 
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={facebook}/></a> 


</div>
            </div>
            </div>
            </div>
           
            <hr className='footer-line'>
            </hr>
            <p className='footer-copy'>&copy; Copyright 2023, Sivaji Jagadabi</p>
            </div>
        </>
    )
}

export default Footer;