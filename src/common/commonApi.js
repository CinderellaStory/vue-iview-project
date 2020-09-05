// 公共js
import request from './axios'
// 公共配置接口域名接口
export function configApi(data) {
  return request({
    url: 'https://longtou.bc100.com/oapi/config/pc',
    method: 'post',
    data
  })
}