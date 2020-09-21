import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import UserKit from '../data/UserKit'

export default function CustomerDetailPage(props) {

  const customerId = props.match.params.id
  const [customerData, setCustomerData] = useState(null)
  const userKit = new UserKit()
  const history = useHistory()

  useEffect(() => {
    userKit.getCustomerDetail(customerId)
      .then(res => res.json())
      .then(data => {
        setCustomerData(data)
      })
  }, [])

  function handleDelete() {
    userKit.customerDelete(customerId)
    .then(res => {
      alert('Customer is deleted')
      history.push("/home")
    })
  }

  return (
    <>
      {!customerData && (
        <p>Loading Customer data</p>
      )}
      {customerData && (
        <>
          <h1>{customerData.name}</h1>
          <button onClick={handleDelete}>Delete Customer</button>
          <p>name: {customerData.name}</p>
          <p>organisationNr: {customerData.organisationNr}</p>
          <p>vatNr: {customerData.vatNr}</p>
          <p>reference: {customerData.reference}</p>
          <p>paymentTerm: {customerData.paymentTerm}</p>
          <p>website: {customerData.website}</p>
          <p>email: {customerData.email}</p>
          <p>phoneNumbe: {customerData.phoneNumber}</p>
        </>
      )}
    </>
  )
}
