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

export function getExportName(url) {
  return request({
    url: url + '/appInfo/queryAppNameList',
    method: 'get'
  })
}

export function getExportType(url) {
  return request({
    url: url + '/dictType/queryArticleTypeByDictCode',
    method: 'get'
  })
}

export function queryArticleHarmful(url, data) {
  return request({
    url: url + '/export/queryArticleHarmfulList',
    method: 'post',
    data
  })
}
