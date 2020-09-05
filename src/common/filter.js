// 请求前所做的
export function filterRequest() {
  // 有token时存 可以用vuex也可以缓存
  if (JSON.parse(localStorage.getItem('token'))) {
    const token = JSON.parse(localStorage.getItem('token'))
    return token
  }
}
// 请求后做的
export function filterResponse(response) {
  if (response.data.status && response.data.status !== 200) {
    return Promise.reject(response)
  } else {
    return response
  }
}
