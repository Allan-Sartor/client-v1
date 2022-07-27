import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(context?: any) {
  const {'FinanceBarbertoken': token} = parseCookies(context);
  const api = validOfEnvironments();
  
  function validOfEnvironments() {
    let api;

    if (process.env.NODE_ENV === 'production') {
      return api = axios.create({
        baseURL: 'https://api-lenhador.herokuapp.com/api/v1/'
      })
    } else if (process.env.NODE_ENV === 'development') {
      return api = axios.create({
        baseURL: 'http://localhost:3001/api/v1/'
      })
    }
  }
  
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
