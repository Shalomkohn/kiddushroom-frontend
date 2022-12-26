import React from 'react'
import Nav from './Nav'
import BackgroundDesign from './BackgroundDesign'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Header = ({ isAuth, signUserOut }) => {

  const postUrl = `https://kiddushroom.us21.list-manage.com/subscribe/post?u=618f971740f84341db1f9a83e&amp;id=dec8ef09aa&amp;f_id=0027c3e1f0`;

  return (
    <header className='header'>
      <div className="hero">
        <div className="container">
          <div className="cta">
          <h1>Nourishment for body and soul.</h1>
          <div htmlFor="">Subscribe to the newsletter</div>
          <form action="#">
            {/* <input type="text" name='email' placeholder='Enter email'/> */}
            {/* <button type='submit'>Subscribe</button> */}
            <MailchimpSubscribe url={postUrl} />
          </form>
          </div>
        </div> 
      </div>
      <BackgroundDesign />
    </header>
  )
}

export default Header;
