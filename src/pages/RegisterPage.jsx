import React, {useState} from 'react'
import UserKit from '../data/UserKit';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("Hassan")
  const [lastName, setLastName] = useState("Mian")
  const [email, setEmail] = useState("mian+test+123@willandskill.se")
  const [password, setPassword] = useState("js-fend-19")
  const [companyName, setCompanyName] = useState("Apple Inc")

  
  const userKit = new UserKit()
  function handleCreateUser() {
    userKit.register(firstName, lastName, email, password, companyName, "0")
  }

  return (
    <>
      <h1>Register</h1>
      <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <input placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>

      <button onClick={handleCreateUser}>Create User</button>
    </>
  )
}
