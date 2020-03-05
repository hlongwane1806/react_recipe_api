import React from 'react';
import {FaGithubSquare,FaLinkedin,FaWhatsapp,FaGlobe,FaEnvelope,FaPhone} from 'react-icons/fa'

const Footer =()=>{
return(
<footer id="footer" className="page-footer">
<div id = "contact" className="container">
    <div className="row footer-centered">
        <div className="col s12 m6 l6">
          
                <div className ="contact-details">
                <h4  className="title">Contact Me</h4>
                <div className="contact-link">
                <FaEnvelope className="contact-icon"><a href="mailto: hlongwane.hlengiwe.anele@gmail.com" target="_blank"></a></FaEnvelope>
                    &nbsp;&nbsp;
                <a href="mailto: hlongwane.hlengiwe.anele@gmail.com" target="_blank">hlongwane.hlengiwe.anele@gmail.com</a>
                </div>
                <div className="contact-link">
               <a href="tel+27793907610" target="_blank"> <FaPhone className="contact-icon"/></a>
                &nbsp;&nbsp;
                <a href="tel+27793907610" target="_blank">+27 79 390 7610</a>
                </div>
                <br />
                <div className="footer-links">
            <a href="https://github.com/hlongwane1806" target="_blank"><FaGithubSquare className="contact-icon" /></a> 
            &nbsp;
        <a href="https://www.linkedin.com/in/anele-hlongwane-000685145/" target="_blank"><FaLinkedin className="contact-icon" /></a>
        &nbsp;
        <a href="https://anelehlongwane.netlify.com/" target="_blank"><FaGlobe className="contact-icon"/></a>
            </div>
               
                
                </div>
        
        </div>   
    </div>
  
</div>

</footer>);
}

export default Footer;