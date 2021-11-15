import request from '@/utils/request1'
export function getQueryVerification(base_url, params) {
  console.log(base_url)
  console.log('params:', params)
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/export/queryVerification',
    method: 'post',
    data: params
  })
}
