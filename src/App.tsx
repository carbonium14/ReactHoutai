import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import router from './router/router'
import { message } from 'antd'
function ToPage1() {
  const navigateTo=useNavigate();
  useEffect(()=>{
    //加载完组件之后执行这里的代码
    navigateTo('/page1');
    message.warn('你已经登陆过了!');
  },[])
  return <div></div>
}
function ToLogin() {
  const navigateTo=useNavigate();
  useEffect(()=>{
    //加载完组件之后执行这里的代码
    navigateTo('/login');
    message.warn('你还没有登录,登录后再访问!');
  },[])
  return <div></div>
}
function BeforeRouterEnter() {
  const outlet=useRoutes(router);
  const token =localStorage.getItem('houtai-token');
  const location=useLocation();
  //注意不能用navigate来跳转，因为这是一个正常的jsx组件
  if(location.pathname==='/login'&&token) {
    return <ToPage1></ToPage1>
  }
  if(location.pathname!=='/login'&&!token) {
    return <ToLogin></ToLogin>
  }
  return outlet;
}
function App() {
  return (
    <div className="App">
      <BeforeRouterEnter></BeforeRouterEnter>
    </div>
  )
}

export default App
