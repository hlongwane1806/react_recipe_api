 import React from 'react';
 import {Link} from 'react-router-dom';

const Recipe =(props) =>{
    const style={
        width:'100%',
        height:360
    }
    const baseUri ="https://spoonacular.com/recipeImages/";
    return(
        <div className="col s12 m12 l6">
            <div className ="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null? <img src ={`${baseUri}/pumpkin_custard-24320.jpg`} alt="image-card" style={style}/> : 
                        props.image.includes('http')?  <img src ={`${props.image}`} alt="image-card" style={style}/>:
                        <img src ={baseUri+props.image} alt="image-card" style={style}/>
                       
                    }
                </div>
                <div className="card-content">
                    <Link to={"recipes/"+props.recipeId}>{props.title}</Link>
                </div>
            </div>
        </div>
    )
}


export default Recipe;