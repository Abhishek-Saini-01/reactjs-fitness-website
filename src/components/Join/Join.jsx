import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>

        <div className="right-j">
            <form action="" className="email-container">
                <input type="email" name="user_email" id="" placeholder='Enter Your Email address'/>
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join