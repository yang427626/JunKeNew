import request from '@/utils/request'

export function finduserlist(url, data) {
  return request({
    url: url + '/finduserlist',
    method: 'post',
    data
  })
}

export function alldept_find(url) {
  return request({
    url: url + '/alldept_find',
    method: 'get'
  })
}

export function modifyuserlist(url, data) {
  return request({
    url: url + '/modifyuserlist',
    method: 'post',
    data
  })
}

export function adduserlist(url, data) {
  return request({
    url: url + '/adduserlist',
    method: 'post',
    data
  })
}

export function deleteuserlistex(url, data) {
  return request({
    url: url + '/deleteuserlistex',
    method: 'post',
    data
  })
}

