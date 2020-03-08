import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Agences from "./components/layout/Agences";
import Achat from "./components/layout/Achat";
import Location from "./components/layout/Location";
import Menu from './components/layout/menu'
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/layout/Admin";
import { Footer } from "./components/layout/Footer";
import "./App.css"
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      
      <Provider store={store}>
        <div> <Menu /></div>
        <Router>
          <div className="page-container">
          <div className="content-wrap">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/location/" component={Location} />
            <Route exact path="/Achat/" component={Achat} />
            <Route exact path="/Agences/" component={Agences} />
           

            <div>
            
           
            <Route exact path="/admin" component={Admin} /> </div>
            <Switch>
            
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              
            </Switch>
          </div>
          </div>
        </Router>
        <Footer />
      </Provider>
      
    );
  }
}
export default App;