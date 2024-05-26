import React from 'react'
import "../styles/contact.scss"


const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='h1'>
      <h1>Contact us</h1>
      </div>
      <div className='input'>
      <label htmlFor="name">Name</label> <br />
      <input type="text" /> <br />
      <label htmlFor="email">Email</label> <br />
      <input type="email" name="email" id="" /> <br />
      <label htmlFor="message">Message</label> <br />
      <input type="text" name="message" id="" /> 
      <br />
      <button type="submit">Submit</button>
      </div>
      
    </div>

    </>
  )
}

export default Contact
