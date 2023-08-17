import React, { useEffect, useState } from 'react'
import './Categories.scss'
import Product from '../../components/product/Product'
import { useNavigate, useParams } from 'react-router-dom'

function Categories() {

    const navigate = useNavigate();
    const params = useParams();
    const [categoryId, setCategoryId] = useState('');

    const categoryList = [{
        id: 'comics',
        value: 'Comics',
    }, {
        id: 'tv-shows',
        value: 'Tv-Shows',
    }, {
        id: 'sports',
        value: 'Sports',
    }]

    useEffect(() => {

        setCategoryId(params.categoryId);

    }, [params])

    function updateCategory(e) {
        navigate(`/category/${e.target.value}`)
    }

    return (
        <div className='Categories'>
            <div className="container">
                <div className="header">
                    <div className="info">
                        <h2>Explore All Print And Artwork</h2>
                        <p>India's largest collection of wall posters for your bedroom,living room,kids room,kitchen and posters & art prints at highest quality lowest price quaranteed.</p>
                    </div>
                    <div className="sort-by">
                        <div className="sort-by-wrapper">
                            <h3 className='sort-by-text'>Sort By</h3>
                            <select className='select-sort-by' name="sort-by" id="sort-by">
                                <option value="relavance">Relavance</option>
                                <option value="newest-first">Newest First</option>
                                <option value="price-lth">Price - Low To HIgh</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="filter-box">
                        <h3>Category</h3>
                        {categoryList.map(item => (
                            <div key={item.id} className="filter-radio">
                                <input
                                    type="radio"
                                    name='category'
                                    value={item.id}
                                    id={item.id}
                                    onChange={updateCategory}
                                    checked={item.id === categoryId}
                                />
                                <label htmlFor={item.id}>{item.value}</label>
                            </div>))}
                    </div>
                    <div className="product-box">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories