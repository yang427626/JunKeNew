import request from '@/utils/request'

export function finduserlist(url, data) {
  console.log("data",data)
  return request({
    url: url + '/user/list',
    method: 'post',
    data:data
  })
}

export function alldept_find(url) {
  return request({
    url: url + '/dept/list',
    method: 'get'
  })
}

export function modifyuserlist(url, data) {
  console.log("data:",data);
  return request({
    url: url + '/user/update',
    method: 'post',
    data
  })
}

export function adduserlist(url, data) {
  return request({
    url: url + '/user/add',
    method: 'post',
    data
  })
}

export function deleteuserlistex(url, data) {
  console.log("data",data);
  return request({
    url: url + '/user/delete',
    method: 'post',
    data
  })
}

