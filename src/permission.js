import router from './router'
// import axios from 'axios'
import {
  ForwardLogin
} from '@/api/monitoringReally'
router.beforeEach((to, from, next) => {
  next()
  // const token = sessionStorage.getItem('token');
  // // const result=sessionStorage.getItem('result');
  // if (to.path == '/loginRedirect') {
  //     next()
  // } else {
  //     if (token) {
  //         ForwardLogin('http://10.165.8.84:8888/live', {
  //             ticket: token
  //         }).then(res => {
  //             console.log(res.data)
  //             // sessionStorage.setItem('result', res.data.result)
  //             if (res.data.result == false) {
  //                 // Message.warning('没有权限')
  //                 next('/401')
  //                 // window.location = sessionStorage.getItem('mhUrl')
  //             } else {
  //                 next()
  //             }
  //         })
  //     }else{
  //         setTimeout(() => {
  //             // sessionStorage.removeItem("token");
  //             next()
  //             // window.location = sessionStorage.getItem('mhUrl');
  //           }, 1000)
  //     }
  // }
})

// next()
// let token = sessionStorage.getItem('token')
// let result = sessionStorage.getItem('result')
// if (token) {
//     // if (result) {
//         // next()
//     // } else {
//         ForwardLogin('http://10.165.8.84:8888/live', {
//             ticket: token
//         }).then(res => {
//             console.log(res.data)
//             sessionStorage.setItem('result', res.data.result)
//             if (res.data.result == false) {
//                 // Message.warning('没有权限')
//                 next('/401')
//                 // window.location = sessionStorage.getItem('mhUrl')
//             } else {
//                 next()
//             }
//         })
//     // }

// } else {
//     if (to.path == '/loginRedirect') {
//         next()
//     } else {
//         window.location = "http://10.161.17.70/login";
//     }

// }
