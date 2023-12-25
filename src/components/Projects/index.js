import './index.css'
import project1a from '../Images/project1a.png'
import project2 from  '../Images/project2.png'
import project3 from '../Images/project3.png'
import Project4 from '../Images/Project4.png'
import project5 from '../Images/project5.png'
import project6 from '../Images/project6.png'
import { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'


const Projects = () => {

    //     const [open,setOpen]=useState(true)

    // const setOpenProject=()=>{
    //     setOpen(prevState=>!open)
    // }

    return (

        <>
        <Navbar/>
       
        <div>
        <div className='home-about-container'>
                <h1 style={{ marginTop: '85px', color: '#05E7CE', fontSize: '35px', textAlign: 'center' }}>PROJECTS</h1>
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
        <Footer/>
        </>

    )
}


export default Projects