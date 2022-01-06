import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DogList from './view/DogList';
import DogDetails from './view/DogDetails';
import EditDog from './components/EditDog/EditDog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/dogs/:id/edit" component={EditDog} />
          <Route path="/dogs/:id" component={DogDetails} />
          <Route path="/admin" component={EditDog} />
          <Route path="/" component={DogList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
