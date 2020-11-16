import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
