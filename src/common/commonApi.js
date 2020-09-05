// 公共js
import request from './axios'
// 公共配置接口域名接口
export function configApi(data) {
  return request({
    url: '公共配置接口域名接口',
    method: 'post',
    data
  })
}