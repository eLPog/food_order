import './App.css';
import { Header } from './Components/UI/Header/Header';
import { Meals } from './Components/Meals/Meals';
import { Cart } from './Components/Cart/Cart/Cart';

function App() {
  return (

    <div className="App">
      <Cart />
      <Header />
      <main>
        <Meals />

      </main>
    </div>
  );
}

export default App;
