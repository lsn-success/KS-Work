import './index.scss'
import { Image, Button } from 'antd-mobile';
import { StarFill } from 'antd-mobile-icons'


function Detail() {
  const demoSrc = 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
  const demoSrc2 = 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
  var star = [];
  for (let i = 0; i < 3; i++) {
    star.push(<StarFill color='var(--adm-color-danger)' />)
  }
  for (let i = 0; i < 1; i++) {
    star.push(<StarFill color='var(--adm-color-weak)' />)
  }

  return (
    <div className="detail-con">
      <div className="shop-con">
        <div className="shop-msg-con">
          <Image
            src={demoSrc}
            width={64}
            height={64}
            fit='cover'
            style={{ borderRadius: 32 }}
          />
          <div className='shop-msg'>
            <div className='title'>快手小店</div>
            <div className='shop-grade'>总销量311.9万件</div>
          </div>
        </div>
        <Button block color='danger' shape='rounded' fill="outline" size='small'>进店逛逛</Button>
      </div>
      <div className='shopping-feel-con'>
        <div>
          <span style={{ fontSize: '1rem', fontWeight: '600' }}>购物体验星级</span>
          <span style={{ margin: '0 10px' }}>{star} 中</span>
          <span style={{ color: '#e37c13' }}>4.75</span>
        </div>
        <div className='sevice'>
          <span>商品质量 4.46</span>
          <span>客服服务 4.46</span>
          <span>物流速度 4.46</span>
          <span>售后体验 4.46</span>
        </div>
      </div>
      <div className='commodity-detail-con'>
        <div>
          <div className='title'>商品详情</div>
          <div className='commodity-msg'>
            <div><div>品牌</div><div>科凡</div></div>
            <div><div>是否进口</div> <div>是</div></div>
            <div><div>产地</div> <div>杭州</div></div>
            <div><div>净含量</div> <div>105克</div></div>
          </div>
        </div>
        <div className='commodity-img'>
          <p style={{ fontSize: '1.1rem' }}>非常棒的产品</p>
          <Image lazy src={demoSrc2} />
        </div>
        <div className='price-description'>
          <div className='title'>价格说明</div>
          <ul style={{padding: '15px'}}>
            <li>划线说明<div>指商品的专柜价、品牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等[并非原价]，经供参考。</div></li>

            <li>未划线说明<div>指商品的实时标价。不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠卷、积分等发生变化，最终以订单阶段页价格为准。</div></li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Detail;
