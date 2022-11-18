import React,{lazy} from 'react'
import Home from '../views/Home'
// import About from '../views/About'
// import User from '../views/User'
// const About= lazy(()=>import('../views/About'))
// const User= lazy(()=>import('../views/User'))
const Page1=lazy(()=>import('../views/Page1'))
const Page2=lazy(()=>import('../views/Page2'))
const Page301=lazy(()=>import('../views/Page301'))
const Login =lazy(()=>import('../views/Login/index'))
import {Navigate} from 'react-router-dom'
const withLoadingComponent=(comp:JSX.Element)=><React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
const routes=[
    {
        path:'/',
        element:<Navigate to='/login'></Navigate>
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
            },
            {
                path:'/page3/page301',
                element:withLoadingComponent(<Page301></Page301>)
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'*',
        element:<Navigate to='/page1'></Navigate>
    }
]
export default routes