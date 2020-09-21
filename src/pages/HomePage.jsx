import React, { useState, useEffect } from 'react'
import UserKit from '../data/UserKit';
import CustomerCreate from '../components/CustomerCreate';
import CustomerList from '../components/CustomerList';


export default function HomePage() {
  const [customerList, setCustomerList] = useState([])
  
  const userKit = new UserKit()
  
  function fetchClients() {
    userKit.getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results)
      })
  }
  

  useEffect(() => {
    fetchClients()
  }, [])

  return (
    <>
      <h1>Welcome to Business Application</h1>
      <div>
        <h2>Customers</h2>
        <div>
          <CustomerList customerList={customerList} />
        </div>

        <hr />

        <div>
          <CustomerCreate handleOnSuccess={fetchClients} />
        </div>
      </div>


    </>
  )
}
