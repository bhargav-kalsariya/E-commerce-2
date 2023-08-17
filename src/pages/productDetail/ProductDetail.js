import React from 'react'
import dummyImg from '../../assets/mtp22d028-02.webp'
import './ProductDetail.scss';

function ProductDetail() {
    return (
        <div className='ProductDetail'>
            <div className="container">
                <div className="product-layout">
                    <div className="product-img center">
                        <img src={dummyImg} alt="product img" />
                    </div>
                    <div className="product-info">
                        <h1 className="heading">
                            This is a title , wall poster
                        </h1>
                        <h3 className="price">$ 549</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto facere odio enim inventore velit eius asperiores rem illum iure suscipit aperiam sunt nesciunt, consequuntur nam voluptate non quam dignissimos.
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