import React from 'react'
import web from '../src/Images/img.jpg'
// import {NavLink} from 'react-router-dom'
import Common from './Common'

const Home = () => {
    return (
        <>
         <Common
              name = 'Grow your Business'
             imgsrc = {web}
             visit = '/services'
             btname = 'Get Started'
         />
        </>
    )
}

export default Home
