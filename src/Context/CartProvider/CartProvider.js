import { useState, useReducer } from 'react';
import { CartContext } from '../CartContext/CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action)=> {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    // } if (action.type === 'REMOVE') {
    //   const updatedItems = state.items.filter((el)=>el.id !== action.item.id);
    // }
    // throw new Error('Reducer action dont exist');
  }

  return defaultCartState;
};

export const CartProvider = (props)=>{
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item)=>{
    dispatch({ type: 'ADD', item });
  };
  const removeItemFromCartHandler = (itemID)=>{
    dispatch({ type: 'REMOVE', itemID });
  };
  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
