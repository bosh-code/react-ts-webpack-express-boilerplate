import express from 'express'
import { getPrice } from '../api/coingecko'
const router = express.Router()

/* GET /api/v1/ */
router.get('/', async function (req, res, next) {
  const coin = 'bitcoin'
  const currency = 'nzd'
  const price = await getPrice(coin, currency)

  if (Object.prototype.hasOwnProperty.call(price, 'error')) {
    res.json(`There was an error during API request: ${price.error}`)
  } else {
    res.json(`The price of ${coin} is: $${price} ${currency.toUpperCase()}`)
  }
})

module.exports = router
