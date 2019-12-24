import React , { Component } from 'react';
//import { Route,Switch } from 'react-router-dom';
import Home from '../Home/Home';

class mainbuilder extends Component{
    render(){
        return(
            <Home/>
        );
    }
}
export default mainbuilder;

/*
<Switch>
    <Route exact path="/" component={Home} />
</Switch>
*/