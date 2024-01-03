const cartReducer = (state, action) => {
    
    if (action.type === "ADD_TO_CART") {
        let { _id, color, quantity, singleProduct } = action.payload;
        // console.log(singleProduct); // TESTED ✅

        let cartProduct;

        cartProduct = {
            _id: _id + color,
            name: singleProduct.name,
            color,
            quantity,
            image: singleProduct.image,
            price: singleProduct.price,
            max: 5 // Product Stock - can't add more than 5
        };

        return {
            ...state,
            cart: [...state.cart, cartProduct],
        }
    }

    return state;
};

export default cartReducer;