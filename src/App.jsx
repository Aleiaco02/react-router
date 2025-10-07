import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList'
import AboutUs from './pages/AboutUs'
import DefaultLayout from './layout/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductDetail from './pages/ProductDetail'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={HomePage} />
          <Route path='/product'>
            <Route path='' Component={ProductList} />
            <Route path=':id' Component={ProductDetail} />
          </Route>
          <Route path='/about-us' Component={AboutUs} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
