import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getRecipe,getSimilarRecipe, getRandom} from '../API_functions/apiFunctions';
import SimilarRecipe from '../components/SimilarRecipe';
import Spinner from '../components/Spinner';

class ViewRecipe extends Component{
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            recipe:[],
            otherRecipes:[],
            loading:true
        }
        this.ingredientsList = this.ingredientsList.bind(this);
        this.getOtherRecipes = this.getOtherRecipes.bind(this);
        this.changeRecipe = this.changeRecipe();
    }

    componentDidMount= ()=>{
        getRecipe(this.state.slug)
        .then(res=> {
            console.log(res.data)
            this.setState({
                    recipe:res.data,
                    loading:false
            })
        }).catch(err=>console.log(err));


        getRandom(4)
    .then(res=>{
        this.setState({
            otherRecipes: [...res.data.recipes]
        })
    })
    .catch(err=>console.log(err));
    }


     ingredientsList = ()=>{
         const ingredients = {...this.state.recipe.extendedIngredients}
         let originals = [];
   Object.entries(ingredients).forEach((entry)=>{
            Object.values(entry).forEach((item)=>{
               if(item.original){
                originals.push(item.original);
               }    
            })
        })

    return  originals.map((item,index)=>(<p key={index}>{item}</p>));
    
}

getOtherRecipes= ()=>{
    return  this.state.otherRecipes.map((recipe,index)=>< SimilarRecipe changeRecipe={this.changeRecipe} className="smaller-card" title={recipe.title}
    recipeId={recipe.id} key={index} image={recipe.image} />);
  
   
}

changeRecipe =()=>{

    this.setState({
        slug: this.props.match.params.slug,
        loading:true
    })
    console.log("here", this.state.slug);
    getRecipe(this.state.slug)
    .then(res=> {
        console.log(res.data)
        this.setState({
                recipe:res.data,
                loading:false
        })
    })


}
    render(){
        const style={
            width:'100%',
            height:360
        }
        const {recipe} = this.state;

        if(this.state.loading){
            return(<Spinner />)
        }
        return(<div>
        
            <div className="wrapper">
                
            
    
                <div className="outer-wrapper row">

                            <div className="col s12 m8 l8">
                            <div className="row">
                            <h3>{recipe.title}</h3>
                                <div className="col s12 m12 l12">
                                    { recipe.image == null? <img src ="" alt="image-card" style={style}/> :
                                        <img src ={`${recipe.image}`} alt="image-card" style={style}/>}
                                </div>
                            
                            
                            
                                <div className="info-container">
                                
                                    <p>Minutes to prepare:  {recipe.readyInMinutes} minutes</p>
                                    <p>Serving size:  {recipe.servings}</p>
                                    
                                    <div> 
                                    <h4>Ingredients:</h4>
                                        {this.ingredientsList()}
                                    </div>   
                                <h4>Instructions:</h4>  
                                    <div dangerouslySetInnerHTML={{__html: `${recipe.instructions}`}} />
                    
                                </div>
                            </div>
                            </div>
                            
                               
                </div>
                <hr /> 
                <div className="row">
                <div className="col s12 m12 l12">
                                <h4> Other recipes we thought you might like:</h4>
                                {
                               this.getOtherRecipes()
                               }
                </div>
                </div>
                <div className="row backLink"  style={{cursor:PointerEvent, paddingTop:50}}>
                    
                    <span><Link to="/" className="waves-effect waves-light btn"><i className="large material-icons left">arrow_back</i>Go Back</Link></span>
                </div>
            </div>
            </div>
        )
    }
    
}


export default ViewRecipe;

 