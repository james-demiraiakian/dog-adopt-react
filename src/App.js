import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DogList from './view/DogList';
import DogDetails from './view/DogDetails';
import DogEdit from './view/DogEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/dogs/:id/edit" component={DogEdit} />
          <Route path="/dogs/:id" component={DogDetails} />
          {/* <Route path="/admin" component={DogEdit} /> */}
          <Route path="/" component={DogList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
