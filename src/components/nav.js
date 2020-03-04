import React from 'react';
import {Link} from 'react-router-dom'
const Nav =()=>{
return (
    <nav className="nav-wrapper">
        
             <Link to="/" className="brand-logo">Random Recipes</Link>
             <div className="collapse navbar-collapse" >
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li ><Link  to="/" className="nav-link">Home</Link></li>
                <li ><Link  to="/recipes/new" className="nav-link">Post a new Recipe</Link></li>
            </ul>
            </div>
       
    </nav>
)

}

export default Nav;