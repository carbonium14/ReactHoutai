import React,{lazy} from 'react'
import Home from '../views/Home'
// import About from '../views/About'
// import User from '../views/User'
// const About= lazy(()=>import('../views/About'))
// const User= lazy(()=>import('../views/User'))
const Page1= lazy(()=>import('../views/Page1'))
const Page2= lazy(()=>import('../views/Page2'))
import {Navigate} from 'react-router-dom'
const withLoadingComponent=(comp:JSX.Element)=><React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
const routes=[
    {
        path:'/',
        element:<Navigate to='/page1'></Navigate>
    },
    {
        path:'/',
        element:<Home></Home>,
        children:[
            {
                path:'/page1',
                element:withLoadingComponent(<Page1></Page1>)
            },
            {
                path:'/page2',
                element:withLoadingComponent(<Page2></Page2>)
            }
        ]
    }
    // {
    //     path:'/home',
    //     element:<Home></Home>
    // },
    // {
    //     path:'/about',
    //     element:withLoadingComponent(<About></About>)
    // },
    // {
    //     path:'/user',
    //     element:withLoadingComponent(<User></User>)
    // }
]
export default routes