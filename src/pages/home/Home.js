import React from 'react'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'
import './Home.scss';

function Home() {
    return (
        <div className='Home'>
            <Hero />
            <section className="collection container">
                <div className="info">
                    <div className="heading">Shop by Categories</div>
                    <p className="subheading">
                        Shop from the best, our Film and Tv Posters Collection.
                    </p>
                </div>
                <div className="content">
                    <Category />
                    <Category />
                    <Category />
                </div>
            </section>

            <section className="collection container">
                <div className="info">
                    <div className="heading">Our Top Picks</div>
                    <p className="subheading">
                        All New Designs, Same Old Details.
                    </p>
                </div>
                <div className="content">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        </div>
    )
}

export default Home