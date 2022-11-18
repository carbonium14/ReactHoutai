//请求参数和相应类型
interface CaptchaAPIRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}
interface LoginAPIReq {
  username:string;
  password:string;
  code:string;
  uuid:string;
}
interface LoginAPIRes {
  msg:string;
  code:number;
  token:string;
}