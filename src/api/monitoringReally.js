import request from '@/utils/request1'
export function viewCurrentProject(base_url, data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/viewCurrentProject',
    method: 'post',
    data
  })
}
