import commodityDetail from "./pages/commodityDetail";
import commodityComment from "./pages/commodityComment";

interface router {
  path: string,
  component: any,
  children?: Array<router>
}

const routers: Array<router> = [
  {
    path: '/',
    component: commodityDetail
  },
  {
    path: '/commodityComment',
    component: commodityComment
  }
]
export default routers
