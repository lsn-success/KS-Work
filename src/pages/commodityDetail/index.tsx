import { useState } from 'react'
import { getGoodsList } from '../../api'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Show from './components/show'
import Detail from './components/detail'
import Preference from './components/preference'
import './index.scss'
// import { Router, Route } from 'react-router-dom';

function CommodityDetail() {
  // const [count, setCount] = useState(0)
  //请求详情
  const getList = () => {
    getGoodsList().then(
      (res) => {

      },
      (error) => {

      }
    );
  };

  return (
    <div className="detail-page">
      <Header />
      <div className='content'>
        <Show />
        <Detail />
        <div className='prefer-page'>
          <div className='title'><span className="iconfont icon-aixin"></span>猜你喜欢</div>
          <div className='prefer-item'>
            <Preference/><Preference/><Preference/><Preference/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CommodityDetail
