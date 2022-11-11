import { Item } from "react-native-paper/lib/typescript/components/List/List"

import { CARD_REMOVE, CARD_ADD, CARD_CLEAR, CARD_FINISH } from "../actions/CardActions"



export const initialState = {

    products: [



    ],

}



export const cardReducer = (store = initialState, action) => {

    switch (action.type) {

        case CARD_ADD:

            return { ...store, products: [...store.products, action.value] }

        case CARD_REMOVE:

            return { ...store, products: store.products.filter(Item => Item !== action.value)}

        case CARD_REMOVE:

            return {...store, products: []}

        default: return store

    }

}