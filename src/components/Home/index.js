import * as React from 'react'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import './index.css'
// import sivajiImg from '../Images/SivajiImg.jpg'
import { ThreeDots } from 'react-loader-spinner'
import sivajiimg from '../Images/sivajiimg.jpeg'
import sivajiresume from '../Images/sivajiresume.pdf'
import map from '../Images/map.gif'
import gmail from '../Images/gmail.gif'
import './index.css'
import { MdOutlineFileDownload } from "react-icons/md";
import plays from '../Images/plays.gif'
import axios from 'axios'
import mobile from '../Images/mobile.gif'
import { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Chrono } from 'react-chrono'
import whatsapp from '../Images/whatsapp.gif'
import project1a from '../Images/project1a.png'
import project2 from '../Images/project2.png'
import project3 from '../Images/project3.png'
import Project4 from '../Images/Project4.png'
import project5 from '../Images/project5.png'
import project6 from '../Images/project6.png'
import Footer from '../Footer'
import Navbar from '../Navbar'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const videoURL = 'https://www.youtube.com/watch?v=Sln6p-GViXU&t=47s'


const overlayStyles = {
    backgroundColor: '#ffff',

}

const Home = () => {


    const items = [{
        title: "2016-2018",
        cardTitle: 'MS/MSc (Master of Science)_Computer Science Engineering (CSE) (7.45 CGPA)',
        cardSubtitle: 'Andhra University,Visakhapatnam',
    }, {
        title: "2013-2016",
        cardTitle: 'BSc (Bachelor of Science)_Mathematics, Physics, Computers (MPCS) (78.0%)',
        cardSubtitle: 'Viveka Arts & Science College, Pamur',
    }, {
        title: "2011-2013",
        cardTitle: 'Intermediate_MPC (92.0%)',
        cardSubtitle: 'Omega Junior College, Pamur',
    },
        , {
        title: "2010-2011",
        cardTitle: 'Secondary School Of Certificate (83.0%)',
        cardSubtitle: 'Viveka High School, Pamur',
    }

    ]


    const [size, setSize] = React.useState(undefined);


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeMessage = (e) => {
        setMessage(e.target.value)
    }


    const onSubmitForm = async (e) => {
        e.preventDefault()
        // console.log('submitted')
        // console.log(email)
        // console.log(phone)
        // console.log(name)
        // console.log(message)
        await axios.post('https://portfolio-server-production-6915.up.railway.app/contact', {
            email: email,
            name: name,
            phone: phone,
            message: message,


        })
            .then((res) => {
                if (res.data = 'Success') {
                    console.log('success')
                    alert('Message Sent Succesfully')
                    setEmail('')
                    setName('')
                    setPhone('')
                    setMessage('')
                } else {
                    alert('Something Went Wrong')
                }
            }).catch(err => console.log(err));
    }

    return (

        <>
            <Navbar />
            <div className='home-about-container'>
                <div className='home-container'>
                    <div className='response-container'>
                        <div>
                            <img src={sivajiimg} className='my-img' />
                        </div>
                        <div className='bio-card'>
                            <h1 className='head-name' >HI 👋, I'M SIVAJI JAGADABI</h1>
                            <p className='bio-text' style={{ margin: '0px', padding: '0px',color:'black' }}>I'm passionate frontend developer from India and building the Front-end of Websites and Web Applications that leads to the success of the overall product. and creating user-friendly websites | Seeking opportunities to contribute and learn in the world of web development.</p>
                        </div>
                    </div>
                </div>
                <div className='popup-container'>
                    <div className='pop-up-card'>
                        <div className='about-card'>
                            <h1 className='about-head'>Who Am I</h1>
                            <p style={{ color: '#000008' }} className='about-text'>I'm  passionate frontend developer from India and building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section | Seeking opportunities to contribute and learn in the world of web development.</p>
                            <button className='get-resume-btn'>
                                <a href={sivajiresume} download='resume' target="_blank"
                                    rel="noreferrer" style={{ textDecoration: "none", color: '#05E7CE', fontSize: '20px' }}
                                >
                                    Get Resume
                                </a>
                                <MdOutlineFileDownload className='down-icon' />
                            </button>
                        </div>
                        <div className="popup-container1">
                            <Popup

                                trigger={
                                    <button type="button" className="trigger-button">
                                        <img src={plays} className='video-gif' width='100%' />
                                    </button>
                                }
                                overlayStyle={overlayStyles}
                                position='center center'
                            >

                                <ReactPlayer url={videoURL} controls playing className='react-player' />



                            </Popup>
                            

                        </div >

                    </div>

                    <div className='chrono-container'>

                        <Chrono items={items} mode='VERTICAL' cardHeight='180' style={{ padding: '15px' }} fontSizes={{


                        }}
                            classNames={{
                                card: 'my-card',
                                cardMedia: 'my-card-media',
                                cardSubtitle: 'my-card-subtitle',
                                cardText: 'my-card-text',
                                cardTitle: 'my-card-title',
                                controls: 'my-controls',
                                title: 'my-title',
                            }}
                            theme={{
                                primary: '#05E7CE',
                                secondary: '#ff57a3',
                                cardBgColor: 'white',
                                titleColor: 'black',
                                titleColorActive: 'black',
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='side-icon-bar'>
                <a href="https://www.facebook.com/" target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} className='icon1' >  <FaFacebookF style={{ fontSize: '20px', color: 'white', padding: '12px' }} /></a>
                <a href="https://twitter.com/" target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} className='icon2'>     <FaTwitter style={{ fontSize: '20px', color: 'white', padding: '12px' }} /></a>
                <a href="https://www.google.com/account/about/" target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} className='icon3'>        <FaGoogle style={{ fontSize: '20px', color: 'white', padding: '12px' }} /></a>
                <a href="https://github.com/SivajiJagadabi" target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} className='icon4'>       <FaGithub style={{ fontSize: '20px', color: 'white', padding: '12px' }} /></a>

                <a href="https://www.linkedin.com/in/sivajijagadabi/" target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }} className='icon5'>      <FaLinkedinIn style={{ fontSize: '20px', color: 'white', padding: '12px' }} /></a>

            </div>

            <div className='chat-icon-footer'>
                <a href='https://wa.me/+916300917192' target='_blank' rel="noreferrer">
                    <img src={whatsapp} /></a>
            </div>
            {/* <Projects />
            <Contact /> */}


            <div>
                <div className='home-about-container'>
                    <h1 style={{ marginLeft: '35px', color: '#05E7CE', fontSize: '35px', textAlign: 'center' }}>PROJECTS</h1>
                    <p className='project-text'>Explore a selection of my most impactful and innovative projects that showcase my proficiency in web development. Each project is a testament to my problem-solving skills, creativity, and attention to detail.</p>
                </div>
                <div className='respons-container'>
                    <div className="container">
                        <div className='card'>
                            <div className='image'>
                                <img src={project1a} />
                            </div>
                            <div width='380' height='280' className='content'>

                                <h1 className='project-title'>Nxt Trendz</h1>
                                <p className='project-description'>Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.</p>
                                <p className='tools'><span className='tools-heading'>Tools: </span>: React JS, JS, CSS, Bootstrap, Routing, REST API Calls</p>
                                <a href='https://sivajinxttrendz.ccbp.tech/' target='_blank' rel="noreferrer">      <button className='button-link'>Live Link</button></a>
                            </div>

                        </div>
                    </div>

                    <div className="container">
                        <div className='card'>
                            <div className='image'>
                                <img src={project3} />
                            </div>
                            <div className='content'>

                                <h1 className='project-title'>Nxt Watch</h1>
                                <p className='project-description'>Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).</p>

                                <p className='tools'><span className='tools-heading'>Tools: </span>: React JS, JS, CSS, Bootstrap, Routing, REST API Calls</p>
                                <a href='https://jsnxtwatchapp.ccbp.tech' target='_blank' rel="noreferrer">   <button className='button-link'>Live Link</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className='card'>
                            <div className='image'>
                                <img src={project2} />
                            </div>
                            <div className='content'>

                                <h1 className='project-title'>Jobby App</h1>
                                <p className='project-description'>Brought to life an all-encompassing job search platform, Jobby App.
                                    Created pages for Login, Home, Jobs, and Job item details with React components, form inputs, and
                                    event handlers.</p>  <p className='tools'><span className='tools-heading'>Tools: </span>:  ReactJS,JS, CSS, Bootstrap, Routing, REST API Calls</p>
                                <a href='https://jsjobbyapp.ccbp.tech/' target='_blank' rel="noreferrer"><button className='button-link'>Project Link</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className='card'>
                            <div className='image'>
                                <img src={Project4} />
                            </div>
                            <div width='380' height='280' className='content'>

                                <h1 className='project-title'>Food Munch App</h1>
                                <p className='project-description'>Meet Food Munch, your new food buddy! It's a cool app for food lovers, made with HTML, CSS, and Bootstrap. You can easily explore yummy dishes, get personalized suggestions, and order food hassle-free. The app looks great on any device, and we'll keep adding awesome stuff. Ready to make your food journey awesome? Download Food Munch now.</p>
                                <a href='https://jsfoodmunch.ccbp.tech/' target='_blank' rel="noreferrer">    <button className='button-link'>Live Link</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className='card'>
                            <div className='image'>
                                <img src={project5} />
                            </div>
                            <div width='380' height='280' className='content'>

                                <h1 className='project-title'>WikiPedia Search App</h1>
                                <p className='project-description'>Unlock the vast wealth of knowledge on Wikipedia with a custom search application that delivers relevant and
                                    curated results.
                                    Beautifully presented search results with HTML list elements, styled with CSS, Bootstrap, and a
                                    responsive design that adapts to any device.</p>
                                <p className='tools'><span className='tools-heading'>Tools: </span>:  JS, CSS, Bootstrap, Routing, REST API Calls</p>

                                <a href='https://sivajijwikipedi.ccbp.tech/' target='_blank' rel="noreferrer"><button className='button-link'>Live Link</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className='card'>
                            <div className='image'>
                                <img src={project6} />
                            </div>
                            <div className='content'>

                                <h1 className='project-title'>IPL Dashboard App</h1>
                                <p className='project-description'>Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team
                                    matches info
                                    Implemented UI such as home dashboard, individual team info routes by using React Router library
                                    components like Route, Switch, Link, props, lists & keys.</p>
                                <p className='tools'><span className='tools-heading'>Tools: </span>: React JS, JS, CSS,Routing, REST API Calls</p>

                                <a href='https://sivaiplapp.ccbp.tech/' target='_blank' rel="noreferrer">   <button className='button-link'>Project Link</button></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='contact-container'>
                <div className='response-container'>
                    <div className='contact-details-container'>
                        <div className='contact-card'>
                            <img src={mobile} className='contact-icon' />
                            <div className='mobile-card'>
                                <h1 className='mobile-head'>Mobile</h1>
                                <a href="tel:6300917192" style={{ textDecoration: 'none', color: 'black' }} className='mobile-no'>+91 6300917192</a>
                            </div>
                        </div>
                        <div className='contact-card2'>
                            <img src={gmail} className='contact-icon2' />
                            <div className='mobile-card'>
                                <h1 className='mobile-head'>Email</h1>
                                <a href="https://mail.google.com/mail/#inbox?compose==GTvVlcSDbFfcmrgRpszGjCDqGwvkxKSCCXxSTdmkCSTQqpxFDdtRgspNrKHdpJqKjXcCRFKNTCPlc" target="_blank" rel='noreferrer' className='mobile-no' style={{ textDecoration: 'none', color: 'black' }}>jagadabisivaji@gmail.com</a>
                            </div>
                        </div>
                        <div className='contact-card'>
                            <img src={map} className='contact-icon2' />
                            <div className='mobile-card'>
                                <h1 className='mobile-head'>Address</h1>
                                <a href="https://www.google.com/maps/place/Miyapur,+Telangana/" target="_blank" rel="noreferrer" className='mobile-no' style={{ textDecoration: 'none', color: 'black' }}>
                                    Miyapur,Hyderabad</a>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmitForm} className='form'>
                        <h1 className='contact'>CONTACT</h1>
                        <div className='line'></div>
                        <p className='contact-form-description'>Feel free to Contact me by submitting the form below and I will get back to you</p>
                        <div className='contact-response-container'>
                            <div className='contact-form-container'>
                                <label htmlFor='name'>Name</label>
                                <input type='text' placeholder='Enter Your Name' className='input-box' id='name' onChange={onChangeName} value={name} />
                                <label htmlFor='email'>Email</label>
                                <input type='email' placeholder='Enter Your Email' className='input-box' id='email' onChange={onChangeEmail} value={email} />
                                <label htmlFor='phone'>Phone</label>
                                <input type='tel' placeholder='Enter Your Mobile' className='input-box' id='phone' onChange={onChangePhone} value={phone} />
                                <label htmlFor='message'>Message</label>
                                <textarea id='message' onChange={onChangeMessage} value={message} className='text-area' />

                            </div>
                            <button type='submit' className='submit-btn'>Submit</button>
                        </div>

                    </form>

                </div>


                <div class="gmap_canvas" className='map-card' style={{ marginLeft: '15px', marginBottom: '35px', borderRadius: '5px' }}><iframe className='inner-map' height="557" id="gmap_canvas" src="https://maps.google.com/maps?q=miyapur&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

            <Footer />



        </>
    )
}

export default Home
