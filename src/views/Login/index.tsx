// import { useEffect } from 'react'
import styles from './login.module.scss'
import './login.less'
// import initLogin from './init.ts'
import { Button, Input, Space } from 'antd';
import { ChangeEvent, useState } from 'react';
const View=()=>{
    // useEffect(()=>{
    //     initLogin();
    //     window.onresize=function(){initLogin()}
    // },[])
    const [usernameVal,setUsernameVal]=useState('');
    const [passwordVal,setPasswordVal]=useState('');
    const [captchaVal,setCaptchaVal]=useState('');
    const usernameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setUsernameVal(e.target.value)
    }
    const passwordChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPasswordVal(e.target.value)
    }
    const captchaChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setCaptchaVal(e.target.value)
    }
    const goLogin=()=>{
        console.log(usernameVal,passwordVal,captchaVal);
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
                        <div className="captcha">
                            <Input placeholder="验证码" onChange={captchaChange}/>
                            <div className="captchaImg">
                                <img height='38px' src="" alt="验证码" />
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