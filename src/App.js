import './App.css';
import { useState } from 'react';
import { Header } from './Components/UI/Header/Header';
import { Meals } from './Components/Meals/Meals';
import { CartModal } from './Components/Cart/Cart/CartModal';
import { ShowCartContext } from './Context/ShowCartContext/ShowCartContext';
import { CartProvider } from './Context/CartProvider/CartProvider';

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    cartIsShow ? setCartIsShow(false) : setCartIsShow(true);
  };

  return (
    <CartProvider>
      <ShowCartContext.Provider value={{
        cartIsShow,
        showCartHandler,
      }}
      >
        {cartIsShow && <CartModal />}
        <Header />
        <main>
          <Meals />

        </main>
      </ShowCartContext.Provider>
    </CartProvider>
  );
}

export default App;
