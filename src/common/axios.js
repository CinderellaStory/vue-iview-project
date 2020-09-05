import axios from 'axios'
import { filterRequest, filterResponse } from './filter'
// 创建axios实例
const service = axios.create({
	baseURL: process.env.BASE_API, // api 的 base_url
	timeout: 20000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
		// 在发送请求之前做些什么 赋值token
		config.headers['Authorization'] = filterRequest(config) // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  response => {
		// 对响应数据做点什么
		const res = filterResponse(response)
		return res
  },
  error => {
		// 接口请求失败
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
