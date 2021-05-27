import React from 'react'
import Home from './Home'
import {Switch, Route} from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Service from './Service'
import { Redirect } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
    return (
        <>
        <Navbar/>
        <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/about' component = {About}/>
        <Route exact path = '/service' component = {Service}/>
        <Route exact path = '/contact' component = {Contact}/>
        <Redirect  to = '/'/>
        <Footer/>
          </Switch>
        </>
    )
}

export default App
