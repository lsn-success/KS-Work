import './index.scss'
// import '../../assets/iconfont.css'
import { UserOutline, ArrowDownCircleOutline } from 'antd-mobile-icons'
import { Button, Space } from 'antd-mobile'



function Footer() {

  return (
    <div className="footer">
      <div className="footer-icon"><span className="iconfont icon-geren" /><div>个人中心</div></div>
      <div className="footer-icon"><span className="iconfont icon-dianpu" /><div>店铺</div></div>
      <div className="footer-icon"><span className="iconfont icon-kefu" /><div>客服</div></div>
      <div> <Button block shape='rounded' color='danger'><div className="buy-font">立即购买</div><div className="buy-font2">预估到手￥5.01</div></Button></div>

    </div>
  );
}

export default Footer;
