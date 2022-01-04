import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <h1>Palm Springs Animal Shelter</h1>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
