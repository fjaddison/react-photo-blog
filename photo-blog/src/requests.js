import axios from 'axios'
import { CLIENT_URL } from './constants'

export default axios
  .get(`${CLIENT_URL}/pictures`)
  .catch(err => console.log(err))
