import axios from 'axios';
import { getAPIClient } from './axios';

export const api = getAPIClient();

export const apiCreateUser = validOfEnvironments();

function validOfEnvironments() {
  let api;

  if (process.env.NODE_ENV === 'production') {
    return api = axios.create({
      baseURL: 'https://api-lenhador.herokuapp.com/'
    })
  } else if (process.env.NODE_ENV === 'development') {
    return api = axios.create({
      baseURL: 'http://localhost:3001/'
    })
  }
}
