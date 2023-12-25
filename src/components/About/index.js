import ReactPlayer from 'react-player'
import sivajiresume from '../Images/sivajiresume.pdf'
import soon from '../Images/soon.gif'
import Popup from 'reactjs-popup'
import { MdOutlineFileDownload } from "react-icons/md";
import plays from '../Images/plays.gif'
import { Chrono } from 'react-chrono'
import Footer from '../Footer'
import Navbar from '../Navbar'
import './index.css'

const videoURL = 'https://www.youtube.com/watch?v=Sln6p-GViXU&t=47s'


const overlayStyles = {
    backgroundColor: '#ffff',

}

const About = () => {

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


    return (
        <>
            <Navbar />
            <div className='home-about-container'>
            <div className='popup-container' style={{ marginTop: '80px' }}>
            <div className='pop-up-card'>
                <div>
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
                        <ReactPlayer url={videoURL} controls playing />


                    </Popup>
                    

                </div >
            
                </div>
            <div className='chrono-container'>

                <Chrono items={items} mode='VERTICAL' cardHeight='180' style={{ padding: '15px' }} fontSizes={{
                    cardSubtitle: '1.2rem',
                    cardText: '0.8rem',
                    cardTitle: '1.5rem',
                    title: '1rem',
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
            <Footer />
        </>
    )
}

export default About