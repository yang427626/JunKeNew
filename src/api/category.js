import request from '@/utils/request1'
export function addgetcategorylist(base_url, params) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/addgetcategorylist',
    method: 'post',
    data: params
  })
}

export function modifygetcategorylist(base_url, params) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/modifygetcategorylist',
    method: 'post',
    data: params
  })
}

export function deletegetcategorylist(base_url, params) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/deletegetcategorylist',
    method: 'post',
    data: params
  })
}
