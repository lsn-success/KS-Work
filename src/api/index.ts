import { get, post } from './request';


function getGoodsList() {
  return new Promise((resolve, reject) => {
    get('/Api/admin/goods/list?pageIndex=1&pageSize=4').then((res: any) => {
      resolve(res);
    }, (error: any) => {
      console.log("网络异常~", error);
      reject(error)
    })
  })
}
export {
  getGoodsList
}
