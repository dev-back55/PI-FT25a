import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreateRecipe } from '../components/CreateRecipe';
import { RecipDetail } from '../pages/RecipDetail';
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';
import About from '../pages/About';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/recipes/about" component={About}/>
                <Route exact path="/recipe/create" component={CreateRecipe}/>
                <Route exact path="/recipes/:id" component={RecipDetail}/>    
            </Switch>
        </div>
    </Router>
      
  )
}