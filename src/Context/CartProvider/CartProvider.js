import { useState, useReducer } from 'react';
import { CartContext } from '../CartContext/CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.itemID,
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.itemID);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'CLEAR') {
    return {
      items: [],
      totalAmount: 0,
    };
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
  const clearOrder = ()=>{
    dispatch({ type: 'CLEAR' });
  };
  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearOrder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
