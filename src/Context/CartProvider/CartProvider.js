import { useState } from 'react';
import { CartContext } from '../CartContext/CartContext';

export const CartProvider = (props)=>{
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item)=>{
    items.push(item);
    setItems(items);
  };
  const removeItemFromCartHandler = (itemID)=>{
    setItems(items.filter((el)=>el.id !== itemID));
  };
  const cartContext = {
    items,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
