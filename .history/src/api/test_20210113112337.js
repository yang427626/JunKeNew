import request from '@/utils/request1'

export function finduserlist(url, data) {
  return request({
    url: url + '/finduserlist',
    method: 'post',
    data
  })
}

export function getName(url) {
  return request({
    url: url + '/app/getname',
    method: 'get'
  })
}

export default function getName1(url) {
  return request({
    url: url + '/app/getname',
    method: 'get'
  })
}

export function getType(url) {
  return request({
    url: url + '/app/getType',
    method: 'get'
  })
}

//勾选来源
export function getExportName(url) {
  return request({
    url: url + '/appInfo/queryAppNameList',
    method: 'get'
  })
}

//勾选类型
export function getExportType(url) {
  return request({
    url: url + '/dictType/queryArticleTypeByDictCode',
    method: 'get'
  })
}

//有害导出页查询
export function queryArticleHarmful(url, data) {
  return request({
    url: url + '/export/queryArticleHarmfulList',
    method: 'post',
    data
  })
}
