import { get, post } from './request';


function getGoodsList(param:any) {
  return new Promise((resolve, reject) => {
    get('/list',param).then((res: any) => {
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
