import React, { useEffect, useState } from 'react'
import { getPrice } from '../api/client'

const Price = (): React.ReactElement => {
  const [price, setPrice] = useState()

  useEffect(() => {
    getPrice()
      .then(result => setPrice(result))
      .catch(error => console.log(error.message))
  }, [])

  return (
    <>
      <h1 className="text-2xl text-gray-700">{price}</h1>
    </>
  )
}

export default Price
