export const addToCart = id => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id,
    },
  }
};

export const removeToCart = id => {
  return {
    type: 'REMOVE_TO_CART',
    payload: {
      id,
    },
  }
};
