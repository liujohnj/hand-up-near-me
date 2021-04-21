import Navbar from './Navbar';
import Home from './Home';
import Browse from './Browse';
import Search from './Search';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProviderDetails from './ProviderDetails';
import EditProfile from './EditProfile';
import NotFound from './NotFound';
import Login from './Login';
import Dashboard from './Dashboard';
import Navbar2 from './Navbar2';
import Test1 from './test1';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar2 />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/browse">
              <Browse />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/providers/:id">
              <ProviderDetails />
            </Route>
            <Route path="/editprofile/:id">
              <EditProfile />
            </Route>
            <Route path="/test">
              <Test1 />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
