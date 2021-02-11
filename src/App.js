import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Adi Suhaana Saama Weather app</h1>
      </header>
      <main>
        <Forecast /> 
      </main>
      <footer>
        Created by Adi J for Saama New grad SWE assesment
      </footer>
    </div>
  );
}

export default App;
