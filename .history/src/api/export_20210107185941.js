import request from '@/utils/request1'
export function getharmfulfind(base_url, params) {
  console.log("params:",params)
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/mam/export/queryArticleHarmfulList',
    method: 'post',
    data: params
  })
}

