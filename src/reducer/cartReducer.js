const cartReducer = (state, action) => {
    
    if (action.type === "ADD_TO_CART") {
        let { _id, color, quantity, singleProduct } = action.payload;
        // console.log(singleProduct); // TESTED ✅

        // Tackle The Existing Product 
        let existingProduct = state.cart.find((curItem) => curItem._id === _id + color);
        // console.log(existingProduct); // TESTED ✅

        if (existingProduct) {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem._id === _id + color) {
                    let newQuantity = curElem.quantity + quantity;

                    if (newQuantity >= curElem.max) {
                        newQuantity = curElem.max;
                    }

                    return {
                        ...curElem,
                        quantity: newQuantity,
                    }
                } else {
                    return curElem;
                }
            });

            return {
                ...state,
                cart: updatedProduct,
            }
        } else {

            
            let cartProduct = {
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
    }

    if (action.type === "REMOVE_ITEM") {

        let updatedCart = state.cart.filter((curItem) => curItem._id !== action.payload);

        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }

    return state;
};

export default cartReducer;
