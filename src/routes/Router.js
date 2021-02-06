import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { EquationScreen } from '../pages/EquationScreen'

export const MainRouter = () => {
    return (
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <NavBar />
            <Switch>
                <Route exact path="/equation" component={EquationScreen}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
