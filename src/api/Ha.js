import request from '@/utils/request1'
export function HaViewHandDrowProject(base_url) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/viewHandDrawProject',
    method: 'post'
  })
}
export function HaSaveProject(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/saveProject',
    method: 'post',
    data
  })
}
// 获取历史列表
export function HaIistHistoryProject(base_url) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/listHistoryProject',
    method: 'post'
  })
}
// 获取单个历史
export function HaGetHistoryProject(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/getHistoryProject',
    method: 'post',
    data
  })
}
// 获取标准流程
export function HaListProcess(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/listProcess',
    method: 'post',
    data
  })
}
// 保存流程模板
export function HaSaveProcessTemplate(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/saveProcessTemplate',
    method: 'post',
    data
  })
}

// 下发
export function HaSendProject(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/sendProject',
    method: 'post',
    data
  })
}

// 获取进度条
export function GetProcessByProjectId(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/getProcessByProjectId',
    method: 'post',
    data
  })
}

// 正在下发的项目
export function ListCurrentProject(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/listCurrentProject',
    method: 'post',
    data
  })
}

// 获取任务列表
export function ListTaskByUserId(base_url) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/listTaskByUserId',
    method: 'post'
  })
}

// 获取兵力树
export function HaGetForceTree(base_url) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/getForceTree',
    method: 'post'
  })
}

// 获取保存的兵力树
export function HaListForceTeam(base_url) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/listForceTeam',
    method: 'post'
  })
}

//删除兵力编组
export function HaDeleteForceTeam(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/deleteForceTeam',
    method: 'post',
    data
  })
}

// 保存兵力树
export function HaSaveForceTree(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/saveForceTree',
    method: 'post',
    data
  })
}

// 兵力编组修改名称
export function HaModifyForceTeam(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url + '/ha/modifyForceTeam',
    method: 'post',
    data
  })
}

// 提交
export function submit(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url +"/submit",
    method: 'post',
    data
  })
}

//保存
export function save(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url +"/save",
    method: 'post',
    data
  })
}

//拒绝
export function handleProcess(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url +"/handleProcess",
    method: 'post',
    data
  })
}

// 按任务id获取内容
export function GetRoutePageByTaskId(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url +"/getRoutePageByTaskId",
    method: 'post',
    data
  })
}
// 获取下发信息
export function getSendFileInfo(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url +"/getSendFileInfo",
    method: 'post',
    data
  })
}

// 获取下发文件
export function issueFile(base_url,data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: base_url +"/issueFile",
    method: 'post',
    data
  })
}

