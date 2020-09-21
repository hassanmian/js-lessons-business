import React, { useState } from 'react'
import UserKit from '../data/UserKit'

export default function CustomerCreate({handleOnSuccess}) {
  const [name, setName] = useState("")
  const [organisationNr, setOrganisationNr] = useState("")
  const [vatNr, setVatNr] = useState("")
  const [reference, setReference] = useState("")
  const [paymentTerm, setPaymentTerm] = useState("")
  const [website, setWebsite] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const userKit = new UserKit()

  function handleCustomerCreate() {
    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber
    }
    userKit.customerCreate(payload)
      .then(res => res.json())
      .then(data => {
        if(handleOnSuccess) {
          handleOnSuccess()
        }
      })
  }

  return (
    <>
      <h2>Create new Customer</h2>
      <input placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="organisationNr" value={organisationNr} onChange={(e) => setOrganisationNr(e.target.value)} />
      <input placeholder="vatNr" value={vatNr} onChange={(e) => setVatNr(e.target.value)} />
      <input placeholder="reference" value={reference} onChange={(e) => setReference(e.target.value)} />
      <input placeholder="paymentTerm" value={paymentTerm} onChange={(e) => setPaymentTerm(e.target.value)} />
      <input placeholder="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
      <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={handleCustomerCreate}>Create test customer</button>
    </>
  )
}


/*

organisationNr	string
title: Organisation nr
maxLength: 30
x-nullable: true
vatNr	string
title: Vat nr
maxLength: 15
x-nullable: true
reference	string
title: Reference
maxLength: 50
x-nullable: true
paymentTerm	integer
title: Payment term
maximum: 2147483647
minimum: 0
website	string
title: Website
maxLength: 50
x-nullable: true
email	string($email)
title: Email
maxLength: 254
x-nullable: true
phoneNumber	string
title: Phone number
maxLength: 20
x-nullable: true
*/