import React from 'react';
import Recipe from './Recipe'
const RecipeList =(props) =>{
    return(
        <div className="">
            <div className ="row">
                <div className="col s12">
                    
                    {props.recipes.map((recipe, index)=>{
                        
                        return <Recipe title={recipe.title}
                        recipeId={recipe.id} key={index} image={recipe.image}/>
                    })}
                </div>
            </div>
        </div>
    )
}


export default RecipeList;