import React, { createContext, useReducer } from "react"



import { initialState, cardReducer } from "../../data/reducers/CardReducer"



export const cardContext = createContext(initialState);



export default function CardProvider(props) {

    const [cardState, cardDispacher] = useReducer(cardReducer, initialState)



    return (

        <CardProvider.Provider value={[cardState, cardDispacher]}>

            {props.children}

        </CardProvider.Provider>

    )

}