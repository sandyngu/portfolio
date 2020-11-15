import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' render={routeProps => <Main {...routeProps}/>} />
      </Switch>
    </div>
  );
}

export default App;