import React, { useState } from 'react'
import productContext from './porductContext'

const ProductState = (props) => {

    // let p1 = {
    //     name: "apple",
    //     price: 100
    // }
    // let update = () => {
    //     setTimeout(() => {
    //         setProduct({
    //             name: "mango",
    //             price: 50
    //         })
    //     }, 1000);
    // }
    let products=[
        {
            id:1,
            title: "apple",
            description:"apple from mustang",
            price:100,
            instock: 5

        },
        {
            id:2,
            title: "mango",
            description:"mango from kalaiya ",
            price:50,
            instock: 4

        },
        {
            id:3,
            title: "orange",
            description:"orange from gorkha",
            price:100,
            instock: 5

        }
    ]
    const [product, setProduct] = useState(products)
    return (
        <productContext.Provider value={{ product }}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState
