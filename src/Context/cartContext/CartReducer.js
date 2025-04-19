export const cartReducer = (state, action) => {
  if(action.type === 'SET_STATE'){
    state = action.payload;
    return state;
  }

  if(action.type === 'SET_PRODUCT'){
    // console.log(action.payload)
    state = {...state, products: action.payload}
    return state
  }

  if (action.type === "ADD_TO_CART") {
    state = {
      ...state,
      cart: [
        ...state.cart,
        {
          ...action.payload,
          quantity: 1,
        },
      ],
    };
    return state;
  }

  if (action.type === "REMOVE_FROM_CART") {
    state = {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
    return state;
  }

  if (action.type === "INCREMENT_QUANTITY") {
    state = {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
    return state;
  }

  if (action.type === "DECREMENT_QUANTITY") {
    state = {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item; // Keep the item unchanged if quantity is 1
        }
        // return item; // Return the item as is if it doesn't match
      }),
    };
    return state;
  }
};
