import React from 'react';

const Footer =()=>{
return(
<footer id="footer">
<div id = "contact">
<h1 id="contact-title" className="title">Contact Me</h1>
<div id="social-media">
<i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
<i className="fa fa-twitter-square fa-2x"></i>
<i className="fa fa-github-square fa-2x"></i>

    </div>
    <div id="contact-details">
        <div className ="details">
        <i className="fa fa-envelope fa-2x"></i> hlongwane.hlengiwe.anele@gmail.com
    </div>
        <br/>
        <div className ="details">
    <i className="fa fa-phone fa-2x"></i> +27 79 390 7610
</div>
  </div>  
</div>
</footer>);
}

export default Footer;