import React, { createContext, useReducer } from "react"



import { initialState, productReduce } from "../../data/reducers/ProductReducer"



export const productContext = createContext(initialState);



export default function ProductProvider(props) {

    const [productState, productDispacher] = useReducer(productReduce, initialState)



    return (

        <ProductProvider.Provider value={[productState, productDispacher]}>

            {props.children}

        </ProductProvider.Provider>

    )

}