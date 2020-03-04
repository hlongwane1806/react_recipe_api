import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import './App.css';
import './App.scss';
import Navbar from './components/nav';
import Home from './pages/Home';
import ViewRecipe from './pages/ViewRecipe';
import NewRecipe from './pages/NewRecipe';


//<Switch> is for handling the error page

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path ="/recipes/new" exact component={NewRecipe}/>
        <Route path ="/recipes/:slug" exact component={ViewRecipe}/>
        
      </Switch>
    </Router>
  );
}

export default App;
