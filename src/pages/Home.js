import React,{Component}from 'react';
import SearchArea from "../components/SearchArea";
import RecipeList from "../components/RecipeList";
import Pagination from "../components/Pagination";
import ViewRecipe from "./ViewRecipe";
import Spinner from '../components/Spinner';

import {getRandom, search}  from '../API_functions/apiFunctions';
class Home extends Component{
    constructor(props){       super(props)
        this.state ={
            recipes:[],
            query:'',
            cuisine:'',
            diet:'',
            type:'all',
            excludes:'',
            totalResults:0,
            currentPage:1, 
            currentRecipes:[],
            loading:true
        }
       
    }

componentDidMount = ()=>{
getRandom(100)
.then(response => {
   
    this.setState({
        recipes :[...response.data.recipes],
        currentRecipes:[...response.data.recipes.slice(0,20)],
        totalResults:response.data.recipes.length,
        loading:false
    })
})
.catch(err => {
	console.log(err);
});


}

    handleSubmit = (e)=>{
        e.preventDefault();
       
    
        const parameters ={
            query:this.state.query,
            cuisine:this.state.cuisine,
            diet:this.state.diet,
            type:this.state.type,
            excludes:this.state.excludes


        }
        search(parameters)
        .then(response =>{
                console.log(response.data)
                this.setState({
                    recipes :[...response.data.results],
                    currentRecipes:[...response.data.results.splice(0,20)],
                    currentPage:1,
                    totalResults:response.data.results.length
                })
        })
    }
    handleChange =(event)=>{
        const name=event.target.name;
        const value =event.target.value;
            this.setState({
                [name]: value
            });
    }

    nextPage =(pageNumber)=>{

      
       const firstResult = (pageNumber-1)*20;
       const lastResult =firstResult+20;
                this.setState({
                    currentRecipes :[...this.state.recipes.slice(firstResult,lastResult)],
                    currentPage: pageNumber
                })
       
        
    }
  

    render(){
        const numberPages = Math.floor(this.state.totalResults/20);
        if(this.state.loading){
            return( <Spinner />)
        }
    
       return ( 
      
           <div>
               <br />
                 <div className="recipes">
                   <div className="sidebar">
                        <SearchArea handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                   </div>
                   <div  className="main">
                       {
                       this.state.totalResults ===0? <div><h4>There are no results matching your search</h4></div>:
               <div><RecipeList   recipes={this.state.currentRecipes}/>
               {this.state.totalResults >20?
                <Pagination pages={numberPages}  currentPage ={this.state.currentPage} nextPage={this.nextPage}/> :' ' }</div>
                       }
               </div>
               </div>
           
              
            
           </div>
          
       );
    }
}

export default Home;