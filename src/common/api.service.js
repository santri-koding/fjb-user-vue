import axios from 'axios'
import { API_URL } from './config'

export const http = axios.create({
  baseURL: API_URL
})

/* set the axios config */
http.defaults.headers.get['Accepts'] = 'application/json'
