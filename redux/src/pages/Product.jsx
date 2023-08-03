import React, { useState, useEffect } from 'react'
import '../styles/Product.scss'
const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, [])
    return (
        <>
            <div >

                {
                    products.map(product => (
                        <div className='card' key={product.id}>
                            <img src={product.image} alt="" />
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Product