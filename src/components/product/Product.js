import React from 'react'
import './Product.scss';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    console.log('product', product);
    const navigate = useNavigate();

    return (
        <div className='Product' onClick={() => { navigate(`/products/${product?.attributes?.key}`) }}>
            <div className="product-container">
                <div className="product-img">
                    <div className="img-container">
                        <img src={`http://localhost:1337${product?.attributes?.image.data.attributes.url}`} alt={product?.attributes.title} id='imag' />
                    </div>
                </div>
                <div className="product-info">
                    <div className="title">{product?.attributes?.title}</div>
                    <div className="price">
                        ${product?.attributes?.price}</div>
                </div>
            </div>
        </div>
    )
}

export default Product