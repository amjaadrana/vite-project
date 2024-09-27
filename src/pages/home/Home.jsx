import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/hero section/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
// import AdmissionForm  from '../../components/admition form/AdmissionForm'



function Home() {
  
  return (
    <Layout>
      {/* <AdmissionForm/> */}
      <HeroSection />     
      <Filter />     
      <ProductCard />      
      <Testimonial />
    </Layout>
  )
}

export default Home