import Home from './pages/Home'
import Cart from './pages/Cart'
import Nav from './components/Nav'
import './app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {

  return (
    <>
<div className="app">

      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
</div>

    </>
  )
}

export default App