import React, { useEffect, useState } from 'react'
import dummyImg from '../../assets/mtp22d028-02.webp'
import './ProductDetail.scss';
import { useParams } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';
import Loader from '../../components/loader/Loader'

function ProductDetail() {

    const params = useParams();
    const [product, setProduct] = useState(null);
    async function fetchData() {
        const productResponse = await axiosClient.get(`/products?filters[key][$eq]=${params.productId}&populate=image`);
        console.log('productResponse', productResponse)
        if (productResponse.data.data.length > 0) {
            setProduct(productResponse.data.data[0]);
        }
    }
    useEffect(() => {
        setProduct(null);
        fetchData();
    }, [params])

    if (!product) {
        return <Loader />;
    }

    return (
        <div className='ProductDetail'>
            <div className="container">
                <div className="product-layout">
                    <div className="product-img center">
                        <img src={`http://localhost:1337${product?.attributes?.image.data.attributes.url}`} alt="product img" />
                    </div>
                    <div className="product-info">
                        <h1 className="heading">
                            {product?.attributes.title}
                        </h1>
                        <h3 className="price">${product?.attributes?.price}</h3>
                        <p className="description">
                            {product?.attributes?.desc}
                        </p>
                        <div className="cart-options">
                            <div className="quantity-selector">
                                <span className='btn decrement'>-</span>
                                <span className='quantity'>3</span>
                                <span className='btn increment'>+</span>
                            </div>
                            <button className="btn-primary add-to-cart">Add To Cart</button>
                        </div>
                        <div className="return-policy">
                            <ul>
                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde saepe ea laudantium.</li>
                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail