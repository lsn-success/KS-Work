import { useState, useEffect } from 'react'
import { getGoodsList } from '../../api'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Show from './components/show'
import Detail from './components/detail'
import Preference from './components/preference'
import '../../mock/mock.ts'
import './index.scss'


function CommodityDetail() {

  const [pageNum, setPageNum] = useState<Number>(0);
  const [totalNum, setTotalNum] = useState<Number>();
  const [preferenceList, setPreferenceList] = useState<any>([]);

  const getList = () => {
    let param = { 'pageNum': pageNum };
    getGoodsList(param).then(
      (res: any) => {
        console.log(res);
        preferenceList.push(...res.data)
      },
      (error) => {

      }
    );
  };

  useEffect(() => {
    getList()
  }, [pageNum])
  return (
    <div className="detail-page">
      <Header />
      <div className='content'>
        <Show />
        <Detail />
        <div className='prefer-page'>
          <div className='title'><span className="iconfont icon-aixin"></span>猜你喜欢</div>
          {/* <div className='prefer-item'> */}
            <Preference preferenceList={preferenceList} />
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CommodityDetail
