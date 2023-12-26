import { useState } from 'react'
import axios from 'axios'
import mobile from '../Images/mobile.gif'
import map from '../Images/map.gif'
import gmail from '../Images/gmail.gif'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Contact = () => {

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
        await axios.post('http://localhost:3001/contact', {
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
        <Navbar/>
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
                                <a href="https://www.google.com/maps/place/Miyapur,+Telangana/" target="_blank"  rel="noreferrer" className='mobile-no' style={{ textDecoration: 'none', color: 'black' }}>
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
                            <textarea  id='message' onChange={onChangeMessage} value={message} className='text-area'/>
                            
                        </div>
                        <button type='submit' className='submit-btn'>Submit</button>
                        </div>
                        
                    </form>

                </div>


                <div class="gmap_canvas" className='map-card' style={{   marginLeft: '15px', marginBottom: '35px', borderRadius: '5px' }}><iframe className='inner-map' height="557" id="gmap_canvas" src="https://maps.google.com/maps?q=miyapur&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
            
                <Footer/>
        </>

    )
}

export default Contact