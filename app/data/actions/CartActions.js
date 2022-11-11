export const CART_CLEAR = 'CART_CLEAR';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';
export const CART_ADDE_PRODUCT = 'CART_ADDE_PRODUCT';
export const CART_REQUEST_PRODUCT = 'CART_REQUEST_PRODUCT';


export const CartShopRequest = () => ({

    type: CART_REQUEST_PRODUCT

})

export const CartRemoveProduct = (value) => ({
    
    type: CART_REMOVE_PRODUCT,
    value

})

export const CartAddProduct = (value) => ({

    type: CART_ADDE_PRODUCT,
    value

})

export const CartClear = () => ({
    
    type: CART_CLEAR

})

