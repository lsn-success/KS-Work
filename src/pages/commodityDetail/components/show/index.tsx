import './index.scss'
import { Swiper, Tag, List, Button } from 'antd-mobile';


function Show() {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']//图片链接
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div className="content" style={{ background: color }}>
        {/* {index + 1} */}
      </div>
    </Swiper.Item>
  ))
  return (
    <div className="show-con">
      <Swiper
        indicator={(total, current) => (
          <div className="customIndicator">
            {`${current + 1} / ${total}`}
          </div>
        )}
      >
        {items}
      </Swiper>
      <div className="msg-con">
        <div className='price'>
          <div style={{ display: 'flex' }}>
            <div style={{ fontSize: '1.2rem' }}>￥<span>10.01</span></div>
            <Button shape='rounded' color='danger'><span style={{ fontSize: "0.9rem" }}>预估到手价</span> ￥226 </Button>
          </div>
          <div style={{ color: '#666', fontWeight: 100 }}>已售76.0W件</div>
        </div>
        <div className='discount'>
          <div> <Tag color='#ff6430' fill='outline'>
            满5.01减5
          </Tag></div><div>领劵 </div></div>
        <div className='title'>快手小店测试商品</div>
      </div>
      <div style={{ margin: '0 15px' }}>
        <List.Item onClick={() => { }}>
          <span>退货补运费</span>.<span>假一赔九</span>.<span>支持7天无理由退货</span>
        </List.Item>
        <List.Item onClick={() => { }}>
          72小时内从XX省发货|包邮
        </List.Item>
        <List.Item onClick={() => { }}>
          <span className="iconfont icon-jiangpaipaiming"></span>快手[方便食品]销量榜第7名
        </List.Item>

      </div>
    </div>
  );
}

export default Show;
