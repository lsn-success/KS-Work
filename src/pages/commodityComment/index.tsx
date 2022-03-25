import { useState } from 'react'
import { getGoodsList } from '../../api'
// import './App.scss'
import { Button } from 'antd-mobile'
import { Router, Route } from 'react-router-dom';

function App() {
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
    <div className="App">
      <Button color='primary'>Primary</Button>
    </div>
  )
}

export default App
