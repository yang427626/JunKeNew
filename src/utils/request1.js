import axios from 'axios'
// axios.interceptors
const service = axios.create({
  // baseURL: '', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      return res
    } else {
      return res
    }
  },
  error => {
    // if (error.response.status == 401) {
    // return Promise.reject(error)
    // window.location = sessionStorage.getItem('mhUrl');
    // } else {
    return Promise.reject(error)
    // }
  }
)
service.interceptors.request.use(
  config => {
    config.headers['token'] = sessionStorage.getItem('token')
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
