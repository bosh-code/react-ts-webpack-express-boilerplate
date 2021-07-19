import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'content-type': 'application/json' }
})

export const getPrice = async () => {
  try {
    const { data } = await instance.get('/api/v1')
    return data
  } catch (error) {
    return {
      error: error.message
    }
  }
}
