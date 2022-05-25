import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import GetUsers from "./components/GetUsers";
import UserPage from "./components/UserPage";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={GetUsers} />
          <Route path='/:id' component={UserPage} />
          <Redirect to='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
