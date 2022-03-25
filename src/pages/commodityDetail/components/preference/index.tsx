import './index.scss'
import { Image, Tag } from 'antd-mobile';


function Preference() {
  const demoSrc =
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'

  return (
    <div className="preference-con">
      <Image lazy src={demoSrc} />
      <div style={{padding:'5px 8px'}}>
        <div style={{fontSize:'1.2rem'}}>猜你喜欢商品【口味随机发放】</div>
        <Tag color='#ff6430' fill='outline' style={{ margin: '5px 0' }}>满5.01减5</Tag>
        <div className='p-price'>
          <div><span style={{ color: 'var(--adm-color-danger)' }}>￥</span><span className='price'>5.01</span> ￥10.01</div>
          <div>已售1.7W</div>
        </div>
      </div>
    </div>
  );
}

export default Preference;
