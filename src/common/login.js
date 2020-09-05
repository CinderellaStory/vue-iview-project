// 公共js
import request from './axios'
import Vue from 'vue'
const basetConfig = Vue.prototype.baseConfig
export function queryLogin(data) {
  return request({
    url: basetConfig.loginUrl,
    method: 'post',
    data
  })
}