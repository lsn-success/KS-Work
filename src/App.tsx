import './App.scss'
// import routers from './routes'
import routers from './routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {
            routers.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))

          }
        </Routes>
      </BrowserRouter>
  )
}

export default App
