import React from 'react';
import ani1 from '../imgs/ani1.svg';
import loca from '../imgs/loca.svg';
import mail from '../imgs/mail.svg';
import twitter from '../imgs/foottwit.svg';
import face from '../imgs/face.svg';
import linked from '../imgs/footlin.svg';
import arrow from '../imgs/arrow.svg';
import './Footer.css';

function Footer(props) {
  return (
    <div className='footerdiv'>
      <div className='footer-details'>
        <div className='footer-content1'>
          <div>
          <img src={ani1} alt="ani1img"></img>
          <h3>ANIMAL SHELTER</h3>
          </div>
          <p>One of the best animal shelter places in India.
             We’re recognized by the government. Please take a pledge to take care of these lovely pets !</p>
          <button onClick={()=>props.footerAdopt("adopt")}>Adopt <img src={arrow} alt="arrowimg"></img></button>
        </div>

        <div className='footer-content2'>
          <h3>GET IN TOUCH</h3>
          <div>
          <img className='loca-img' src={loca} alt="loca-img"></img>
          <p>llesfnee cnu efoin eoifn oewifnewo inf sdc
              csdcneno ie woiwemfwokm fwew ecen cloenwo we - 355233</p>
          </div>
          <div>
          <img src={mail} alt="mail-img"></img>
          <p>cisubdcusb@gmail.com</p>
          </div>
          <h3>FOLLOW US</h3>

           <div className='footercontact-img'>
             <img src={twitter} alt="twiiter-img"></img>
             <img src={face} alt="face-img"></img>
             <img src={linked} alt="linked in-img"></img>
           </div>

        </div>
        <div className='footer-content3'>
          <h3>QUICK LINKS</h3>
          <p>Home</p>
          <p>Contact Us</p>
        </div>
       
      </div>
      <div className='footer-end'>
          <p>Copyright ©2023. Animal Shelter</p>
          <div>
          <a href='./'>Privacy Policy</a>
          <a href='./'>Terms of Service</a>
          <a href='./'>Cookies Settings</a>
          </div>
        </div>
    </div>
  )
}

export default Footer