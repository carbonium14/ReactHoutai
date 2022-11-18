import request from './index'
export const captchaAPI=():Promise<CaptchaAPIRes>=>request.get('/prod-api/captchaImage');
export const loginAPI=(params:LoginAPIReq):Promise<LoginAPIRes>=>request.post('/prod-api/login',params);