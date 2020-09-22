import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import UserKit from './data/UserKit';


function App() {

  const [me, setMe] = useState(null)
  
  const userKit = new UserKit()

  useEffect(() => {
    userKit.getMe()
    .then(res => res.json())
    .then(data => {
      setMe(data)
    })
    .catch(errors => {
      console.log(errors)
    })
  }, [])
  
  return (
    <div>
      {me && me.firstName && (
        <p>Welcome {me.firstName}</p>
      )}
      <Switch>
        <Route path="/customer/:id" component={CustomerDetailPage}>
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;



/*
email: nackademin@willandskill.se
password: js-fend-19
*/