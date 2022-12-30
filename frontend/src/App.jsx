import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/Admin/AdminPanel';
import OrdersList from './components/Admin/pages/OrdersList';
import Users from './components/Admin/pages/Users';
import CartScreen from './components/CartScreen/CartScreen';
import CheckoutForm from './components/Checkout/CheckoutForm';

import Home from './components/Home/Home';
import Log from './components/LoginReg/Log';
import Reg from './components/LoginReg/Reg';
import Menu from './components/Menu/Menu';
import Orders from './components/Orders/Orders';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Log />} />
      <Route path="/register" element={<Reg />} />
      <Route path="/menu" element= {<Menu />}/>
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/users" element={<Users />} />

    </Routes>
    </BrowserRouter>
    
    

    
</>
  )
}

export default App
