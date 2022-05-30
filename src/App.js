import './App.css';
import { useState } from 'react';
import { Header } from './Components/UI/Header/Header';
import { Meals } from './Components/Meals/Meals';
import { Cart } from './Components/Cart/Cart/Cart';
import { ShowCartContext } from './Context/ShowCartContext/ShowCartContext';

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    cartIsShow ? setCartIsShow(false) : setCartIsShow(true);
  };

  return (

    <div className="App">
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <ShowCartContext.Provider value={{
        cartIsShow,
        showCartHandler,
      }}
      >
        {cartIsShow && <Cart />}
        <Header />
        <main>
          <Meals />

        </main>
      </ShowCartContext.Provider>
    </div>
  );
}

export default App;
