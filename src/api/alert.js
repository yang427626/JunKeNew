import request from '../utils/request1'
// const base_url = 'http://161.189.11.216:8090'
// const base_url = 'http://52.82.54.61:8090'
let base_url = ''
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
  console.log(params)
  console.log('getRiskConfigList')
  console.log(base_url)
  return request({
    url: base_url + '/riskConfig/getRiskConfigList',
    method: 'get',
    params
  })
}

// 获得数据字典
export function getOptions(params) {
  return request({
    url: base_url + '/dictionary/getOptions',
    method: 'get',
    params
  })
}

// 获得系统群组
export function getGroupList(params) {
  console.log(params)
  return request({
    url: base_url + '/group/getGroupList',
    method: 'get',
    params
  })
}

export function updateRiskInfo(params) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/riskInfoes/updateRiskInfo',
    method: 'post',
    data: params
  })
}
// 新建预警配置提交
export function createRiskConfig(params) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/riskConfig/createRiskConfig',
    method: 'post',
    data: params
  })
}

// 删除预警配置
export function deleteRiskConfig(params) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/riskConfig/deleteRiskConfig',
    method: 'post',
    data: params
  })
}

// 修改预警配置提交
export function updateRiskConfig(params) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/riskConfig/updateRiskConfig',
    method: 'post',
    data: params
  })
}

//  获得报警记录
export function getRiskInfoes(params) {
  return request({
    url: base_url + '/gis/riskInfoes/getRiskInfoes',
    method: 'get',
    params
  })
}

//  删除报警记录
export function deleteRiskInfoes(params) {
  return request({
    url: base_url + '/riskInfoes/deleteRiskInfoes',
    method: 'get',
    params
  })
}

// 获取预警配置
export function getRiskConfig(id) {
  return request({
    url: base_url + '/riskConfig/getRiskConfig?id=' + id,
    method: 'get'
  })
}

// 时间戳转日期格式化
export function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return Y + M + D + h + m + s
}
