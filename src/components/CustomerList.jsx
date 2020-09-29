import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerList({ customerList }) {
  return (
    <>
      {customerList.length === 0 && (
        <strong>You don't have any customer.</strong>
      )}

      {customerList.map(customerItem => {
        return (
          <p key={customerItem.id}>
            <Link to={`/customer/${customerItem.id}`}>{customerItem.name}</Link>
          </p>
        )
      })}
    </>
  )
}
