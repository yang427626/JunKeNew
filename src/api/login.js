import request from '../utils/request1'
export function LoginClick(base_url, data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/login',
    method: 'post',
    data
  })
}
