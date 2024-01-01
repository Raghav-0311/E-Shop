const cartReducer = (state, action) => {
    
    if (action.type === "ADD_TO_CART") {
        let { _id, color, quantity, singleProduct } = action.payload;
        // console.log(singleProduct); // TESTED ✅
    }
};

export default cartReducer;
