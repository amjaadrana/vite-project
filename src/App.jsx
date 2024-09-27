import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Allproducts from './pages/allproducts/Allproducts';
import Nopage from './pages/admin/dashboard/Nopage';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productinfo/ProductInfo';
import MyState from './context/MyState';
import AddProduct from './pages/admin/dashboard/page/AddProduct';
import UpdateProduct from './pages/admin/dashboard/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './pages/order/Order';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/order" element={<ProtectedRoutes>
            <Order />
          </ProtectedRoutes>} />          
          <Route path="/cart" element={<Cart />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/dashboard" element={<ProtectedRoutesForAdmin> <Dashboard /> </ProtectedRoutesForAdmin>
          } />
          <Route path="/addproduct" element={<ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={<ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>




  )
}
export default App


//user protector

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.get('currentuser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'amjaadrana@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}