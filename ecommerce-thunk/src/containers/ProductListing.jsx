import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import { setProducts, fetchProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const products = useSelector((state) => state)
  let dispatch = useDispatch()
  //   const fetchProducts = async () => {
  //     await axios
  //       .get('https://fakestoreapi.com/products')
  //       .then((res) => {
  //         dispatch(setProducts(res.data))
  //       })
  //       .catch((error) => {
  //         console.log('===>', error)
  //       })
  //   }
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductListing
