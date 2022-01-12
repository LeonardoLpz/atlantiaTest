import React, { useState, useEffect } from 'react';
import './style.css';
const url = 'https://atlantia-dev-test.herokuapp.com/api/beer-products/'
const ProductTable = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
        }
        fetchData()
    }, [])
    return (
        <>
            <div className='product-table'>
            <p className='title-secciones table-title'>Comparative Analysis</p>
                <table>
                    <thead>
                    <tr>
                        <th>
                            <p className='title-items'>Nombre</p>
                        </th>
                        <th>
                            <p className='title-items'>Sku</p>
                        </th>
                        <th>
                            <p className='title-items'>% Presencia</p>
                        </th>
                        <th>
                            <p className='title-items'>Av. Price</p>
                        </th>
                        <th>
                            <p className='title-items'>Av. Position</p>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, i) => {
                        return(
                            <tr key={i}>
                                <td>
                                    <img src={item.productImage} className='product-image' alt={i}></img>
                                    <p className='product-name title-items'>{item.name}</p>
                                </td>
                                <td>
                                    <p className='product-sku title-items'>{item.sku}</p>
                                </td>
                                <td>
                                    <p className={`product-presence title-items 
                                        ${item.persistence < 0 ? 'negative-percentage' : 'positive-percentage'}`}>
                                        {Number(item.persistence).toFixed(2)}%</p>
                                </td>
                                <td>
                                    <p className='product-price title-items'>
                                    {item.averagePrice.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    })}</p>
                                </td>
                                <td>
                                    <p className='product-position title-items'>{item.averagePosition}</p>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default ProductTable;