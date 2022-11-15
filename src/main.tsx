import React from 'react'
import ReactDOM from 'react-dom/client'
//样式初始化
import 'reset-css'
//UI框架的样式
// import 'antd/dist/antd.css'//全局引入
//全局样式
import '@/assets/styles/global.scss'
//组件的样式
import App from './App'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
