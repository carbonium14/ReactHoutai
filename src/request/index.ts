import axios from 'axios'
const instance=axios.create({
    baseURL:'http://xue.cnkdl.cn:23683',
    timeout:2000
})
instance.interceptors.request.use((config)=>{
    return config;
},(err)=>{
    return Promise.reject(err);
})
instance.interceptors.response.use((res)=>{
    return res.data;
},(err)=>{
    return Promise.reject(err);
})
export default instance