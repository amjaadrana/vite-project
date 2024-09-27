import React, { useContext, useEffect } from 'react'
import Filter from '../../components/filter/Filter'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import ProductCard from '../../components/productcard/ProductCard' 

function Allproducts() {
  const context = useContext(myContext)
  const { mode, Product ,searchkey, setSearchkey,filterType,setFilterType,
      filterPrice,setFilterPrice} = context

  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart);
  console.log(cartItems)

  const addCart = (Product)=> {
      dispatch(addToCart(Product));
      toast.success('add to cart');

  }

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Filter/>
      <ProductCard/>
      
    </Layout>
  )
}

export default Allproducts