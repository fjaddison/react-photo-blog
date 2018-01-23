import axios from 'axios'
import { CLIENT_URL } from './constants'

export const getRequest = () => {
  return axios.get(`${CLIENT_URL}/pictures`)
}

export const postRequest = (newPicture) => {
  return axios.post(`${CLIENT_URL}/pictures`, newPicture)
}
