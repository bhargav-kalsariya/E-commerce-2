import React from 'react'
import './Product.scss';
import dummyImg from '../../assets/desktop-wallpaper-anime-crossover-poster-anime-poster.jpg'

function Product() {
    return (
        <div className='Product'>
            <div className="product-container">
                <div className="product-img">
                    <div className="img-container">
                        <img src={dummyImg} alt="" id='imag' />
                    </div>
                </div>
                <div className="product-info">
                    <div className="title">Delux Wall hanger 23",23x23 Solid Color</div>
                    <div className="price">$ 549</div>
                </div>
            </div>
        </div>
    )
}

export default Product