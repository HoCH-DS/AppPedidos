import { PRODUCTS_RESPONSE, PRODUCT_SELECT } from '../actions/ProductActions'

export const initialState = {

    prouctList: [],
    selectProduct: null
}

export const productsReducer = (store = initialState, action) => {

    switch (action.type) {
        case PRODUCTS_RESPONSE:
            return { ...store, productList: action.value };

        case PRODUCT_SELECT:
            return { ...store, selectProduct: action.value };
            
        default: return store;
    }
}