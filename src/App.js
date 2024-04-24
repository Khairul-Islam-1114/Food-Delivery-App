import React, { useState } from 'react'
import Nabvar from './components/Navbar/Nabvar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LogInPopup from './components/LogInPopup/LogInPopup';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LogInPopup setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
        <Nabvar setShowLogin={setShowLogin}/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App;
