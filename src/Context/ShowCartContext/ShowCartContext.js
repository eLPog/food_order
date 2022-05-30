import { createContext } from 'react';

export const ShowCartContext = createContext({
  cartIsShow: false,
  showCartHandler: ()=>{},
});
