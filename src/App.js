import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { setUser, logout } from './services/fetch-utils';
import React, { useState, useEffect } from 'react';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';


export default function App() {
  const [email, setEmail] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const user = setUser();

    if (user) {
      setToken(user.access_token);
      setEmail(user.user.email);
    }
  }, []);

  async function handleLogout() {
    await logout();
    setEmail('');
    setToken('');
  }

  return (
    <Router> 
      <div className="App">
        <header> 
          <p className='email'>{email}</p>
          <nav>
            <ul>
              <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <Link to="/restaurants">View Restaurants List</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            {
              token
                ? <Redirect to="/restaurants" />
                : <AuthPage setEmail={setEmail} setToken={setToken} />
            }
          </Route>
          <Route exact path="/restaurants">
            {
              token
                ? <ListPage />
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path="/create">
            {
              token
                ? <CreatePage />
                : <Redirect to='/' />
            }
          </Route>
          <Route exact path="/restaurants/:id">
            {
              token
                ? <UpdatePage />
                : <Redirect to='/' />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

