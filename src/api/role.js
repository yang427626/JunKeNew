import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-element-admin/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/role/getroles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/role/addrole',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/role/updaterole/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/role/delrole/${id}`,
    method: 'delete'
  })
}
