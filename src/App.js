import './App.css';
import { Header } from './Components/UI/Header/Header';
import { Meals } from './Components/Meals/Meals';

function App() {
  return (

    <div className="App">
      <Header />
      <main>
        <Meals />

      </main>
    </div>
  );
}

export default App;
