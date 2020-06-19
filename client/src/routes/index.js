import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home, Players, Team} from '../components';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/players" component={Players}/>
            <Route path="/team" component={Team}/>
        </Switch>
    )
}
