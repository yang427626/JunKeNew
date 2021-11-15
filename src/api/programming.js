import request from '../utils/request1'
export function viewHandDrowProject(base_url, data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/viewHandDrowProject',
    method: 'post',
    data
  })
}

