import request from '@/utils/request1'

let base_url = '127.0.0.1:12355'

console.log('sdfsferewrerewr:')
request.get('serverConfig.json').then((result) => {
  // console.log(result)
  console.log('aler..........')
  base_url = result.data.baseUrl // 设置成Vue的全局属性
  console.log(base_url)
}).catch((error) => {
  console.log(error)
})

// 获得风险配置
export function getRiskConfigList(params) {
  return request({
    url: base_url + '/gis/riskConfig/getRiskConfigList',
    method: 'get',
    params
  })
}

export function login(params) {
  console.log(params)
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/users/signin',
    method: 'post',
    data: params
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
