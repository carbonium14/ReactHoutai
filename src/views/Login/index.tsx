import { useEffect } from 'react'
import styles from './login.module.scss'
import './login.less'
// import initLogin from './init.ts'
import { Button, Input, Space, message } from 'antd';
import { ChangeEvent, useState } from 'react';
import {captchaAPI, loginAPI} from '../../request/api'
import { useNavigate } from 'react-router-dom'
const View=()=>{
    useEffect(()=>{
        // initLogin();
        // window.onresize=function(){initLogin()}
        getCaptcha();
    },[])
    let navigateTo=useNavigate();
    const [usernameVal,setUsernameVal]=useState('');
    const [passwordVal,setPasswordVal]=useState('');
    const [captchaVal,setCaptchaVal]=useState('');
    const [captchaImg,setCaptchaImg]=useState('');
    const usernameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setUsernameVal(e.target.value)
    }
    const passwordChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPasswordVal(e.target.value)
    }
    const captchaChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setCaptchaVal(e.target.value)
    }
    const goLogin=async()=>{
        // console.log(usernameVal,passwordVal,captchaVal);
        if(!usernameVal.trim()||!passwordVal.trim()||!captchaVal.trim()) {
            message.warn('请输入完整信息!');
        }
        const loginRes=await loginAPI({
            username:usernameVal,
            password:passwordVal,
            code:captchaVal,
            uuid:localStorage.getItem('uuid') as string
        })
        if(loginRes.code===200) {
            message.success('登录成功!');
            localStorage.setItem('houtai-token',loginRes.token);
            navigateTo('/page1');
            localStorage.removeItem('uuid');
        }
    }
    const getCaptcha=async()=>{
        // captchaAPI().then(res=>{
        //     console.log(res);
        // })
        const captchaRes=await captchaAPI();
        if(captchaRes.code===200) {
            setCaptchaImg(`data:image/gif;base64,${captchaRes.img}`);
            localStorage.setItem('uuid',captchaRes.uuid);
        }
    }
    return (
        <div className={styles.loginPage}>
            {/* <canvas id='canvas' style={{display:'block'}}></canvas> */}
            <div className={styles.loginBox+' loginbox'}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>通用管理系统</h1>
                    <p>study everyday</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="用户名" onChange={usernameChange}/>
                        <Input.Password placeholder="密码" onChange={passwordChange}/>
                        <div className="captcha" onClick={getCaptcha}>
                            <Input placeholder="验证码" onChange={captchaChange}/>
                            <div className="captchaImg">
                                <img height='38px' src={captchaImg} alt="验证码" />
                            </div>
                        </div>
                        <Button type="primary" block className='loginBtn' onClick={goLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default View