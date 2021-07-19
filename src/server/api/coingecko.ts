import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
  timeout: 1000,
  headers: { 'content-type': 'application/json' }
})

export const getPrice = async (coinId: string, currency: string) => {
  try {
    const { data } = await instance.get(`/simple/price?ids=${coinId}&vs_currencies=${currency}`)
    return data[coinId][currency]
  } catch (error) {
    return {
      error: error.message
    }
  }
}
