import request from '@/utils/request1'
export function SaveManualScript(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/saveManualScript',
    method: 'post',
    data
  })
}