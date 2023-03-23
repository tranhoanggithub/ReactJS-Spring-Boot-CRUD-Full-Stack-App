import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (

    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <header className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Router path="/employees" component={ListEmployeeComponent}></Router>
              <Router path="/add-employee" component={CreateEmployeeComponent}></Router>
              <ListEmployeeComponent />
            </Switch>
          </header>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
