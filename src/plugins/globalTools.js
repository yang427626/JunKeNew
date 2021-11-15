/**
 * Created by zyupo on 2019/05/26
 * https://github.com/openspug
 */

// Promise 添加finally方法
// Promise.prototype.finally = function(callback) {
//   return this.then(
//     () => Promise.resolve(callback()),
//     () => Promise.reject(callback())
//   )
// }

// Date 添加format方法
// Date.prototype.format = function() {
//   return `${this.getFullYear()}-${this.getMonth() +
//     1}-${this.getDate()} ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`
// }

// 数组包含判断
// function isSubArray(parent, child) {
//   for (const item of child) {
//     if (!parent.includes(item.trim())) {
//       return false
//     }
//   }
//   return true
// }

// js对象和数组深拷贝
function deepCopy(obj) {
  if (Array.isArray(obj)) {
    const result = []
    for (const item of obj) {
      result.push(deepCopy(item))
    }
    return result
  } else if (typeof obj === 'object' && obj !== null) {
    const result = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepCopy(obj[key])
      }
    }
    return result
  } else {
    return obj
  }
}

export default deepCopy
