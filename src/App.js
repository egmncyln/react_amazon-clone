import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from './state/StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase/firebase';
import { ACTIONS } from './state/actions';

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: ACTIONS.SET_USER,
          user: authUser
        });
      } else {
        dispatch({
          type: ACTIONS.SET_USER,
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
