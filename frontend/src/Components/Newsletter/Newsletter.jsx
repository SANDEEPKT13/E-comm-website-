import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <h1>Subscribe to our newsletter and stay UPDATED</h1>
        <div>
            <input type="email" placeholder='Your Email Id..' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default Newsletter
