import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DogList from './view/DogList';
import DogDetails from './view/DogDetails';

function App() {
  return (
    <div className="App">
      <h1>Palm Springs Animal Shelter</h1>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/dogs/:id" component={DogDetails} />
          <Route path="/" component={DogList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
