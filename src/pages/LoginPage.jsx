import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit';

export default function LoginPage() {
  const [email, setEmail] = useState("mian+test+123@willandskill.se")
  const [password, setPassword] = useState("js-fend-19")

  const userKit = new UserKit()

  const history = useHistory()

  // Use URL Search Params to parse the query parameters from the url
  const params = new URLSearchParams(history.location.search);
  const uid = params.get('uid')
  const token = params.get('token')
  
  function handleLogin() {
    userKit.login(email, password)
    .then(res => res.json())
    .then(data => {
      userKit.setToken(data.token)
      history.push('/home')
    })
  }

  function handleActivateAccount() {
    userKit.activateUser(
      uid, token
    ).then(
      history.push('/login')
    )
  }

  return (
    <>
      <h1>Activate account</h1>
      {/* Only show that account is beeing activated if uid and token exists in URL */}
      {uid && token && (
        <div>
          Your account is being activated
              {handleActivateAccount()}
        </div>
      )}
      {/* If uid and token doesn't exist in url, render login form */}
      {!uid && !token && (
        <div>
          <p>
            Your account is now active. Please Login
              </p>
          <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </>
  )
}
