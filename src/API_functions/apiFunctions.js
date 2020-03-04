import axios from 'axios';


 
const api='https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes';
const apiKey='03ed29f92amsh89f76f80e9bc18cp1f6e95jsn73fafa562869';
const apiHost='spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
//start of api call functions
export const getRandom = (number) => {
  return axios.get(`${api}/random?number=${number}`, {
	
    "headers": {
      "x-rapidapi-host": `${apiHost}`,
      "x-rapidapi-key": `${apiKey}`
    }})
    .then(res => {
      return res}).catch(  (err,res) => res.status(400).json(err));
}

export const search = parameters =>{
  const {query} = parameters;
  let url="";
  Object.keys(parameters).forEach((key)=>{
    if(parameters[key] && key!=='query'){

      if(parameters[key] !=='all' )
      {
        url+=`${key}=${parameters[key]}&`
     

      }
    }
   
  })
  url+=`number=100&query=${query}`
  console.log("url = "+url)
 return axios.get(`${api}/search?${url}`, {
	
    "headers": {
      "x-rapidapi-host": `${apiHost}`,
      "x-rapidapi-key": `${apiKey}`
    }})
    .then(res =>res)
  .catch(err => {
    console.log(err);
  });
}
export const getRecipe = (id)=>{
 
  return axios.get(`${api}/${id}/information`, {
	
    "headers": {
      "x-rapidapi-host": `${apiHost}`,
      "x-rapidapi-key": `${apiKey}`
    }})
    .then(res => res)
  .catch(err => {
    console.log(err);
  });
   
    
}


export const getSimilarRecipe = (id)=>{
 
  return axios.get(`${api}/${id}/similar`, {
	
    "headers": {
      "x-rapidapi-host": `${apiHost}`,
      "x-rapidapi-key": `${apiKey}`
    }})
    .then(res => res)
  .catch(err => {
    console.log(err);
  });
   
    
}

