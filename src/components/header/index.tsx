import './index.scss'
// import '../../assets/iconfont.css'
import { LeftOutline, SearchOutline } from 'antd-mobile-icons'
import { SearchBar } from 'antd-mobile'



function Header() {

  return (
    <div className="header">
      <div className="icon"><LeftOutline /></div>
      <div className="search"><SearchBar placeholder='请输入内容' /></div>
      <div className="icon"><span className="iconfont icon-fanhui" /></div>
    </div>
  );
}

export default Header;
