const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { _id, color, quantity, singleProduct } = action.payload;
    // console.log(singleProduct); // TESTED ✅

    // Tackle The Existing Product
    let existingProduct = state.cart.find(
      (curItem) => curItem._id === _id + color
    );
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
          };
        } else {
          return curElem;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        _id: _id + color,
        name: singleProduct.name,
        color,
        quantity,
        image: singleProduct.image,
        price: singleProduct.price,
        max: 5, // Product Stock - can't add more than 5
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem._id === action.payload) {
        let decQuantity = curElem.quantity - 1;

        if (decQuantity <= 1) {
          decQuantity = 1;
        }

        return {
          ...curElem,
          quantity: decQuantity,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem._id === action.payload) {
        let incQuantity = curElem.quantity + 1;

        if (incQuantity >= curElem.max) {
          incQuantity = curElem.max;
        }

        return {
          ...curElem,
          quantity: incQuantity,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem._id !== action.payload
    );

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

  // if (action.type === "CART_TOTAL_ITEM") {
  //     let updatedItemValue = state.cart.reduce((initialVal, curItem) => {
  //         let { quantity } = curItem;
  //         initialVal = initialVal + quantity;

  //         return initialVal;
  //     }, 0);

  //     return {
  //         ...state,
  //         total_item: updatedItemValue,
  //     };
  // }

  // if (action.type === "CART_TOTAL_PRICE") {
  //     let total_amount = state.cart.reduce((initialVal, curElem) => {
  //         let { price, quantity } = curElem;
  //         initialVal = initialVal + (price * quantity);

  //         return initialVal;
  //     }, 0);

  //     return {
  //         ...state,
  //         total_amount: total_amount,
  //     }
  // }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_amount } = state.cart.reduce(
      (acc, curElem) => {
        let { price, quantity } = curElem;
        acc.total_item += quantity;
        acc.total_amount += price * quantity;

        return acc;
      },
      { total_item: 0, total_amount: 0 }
    );

    return {
      ...state,
      total_item,
      total_amount,
    };
  }

  return state;
};

export default cartReducer;
