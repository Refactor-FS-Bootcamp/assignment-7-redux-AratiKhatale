import React, { useEffect } from 'react'
import ProductComponents from './ProductComponents'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/action/ProductAction'


const ProductListing = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
                                .catch(err => console.log(err));
        dispatch(setProducts(response.data))
    }


    useEffect(() => {
        fetchProducts();
    },[]);


  return (
    <div className='ui grid continer'> 
        <ProductComponents />
    </div>
  )
}

export default ProductListing