import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(context?: any) {
  const {'FinanceBarbertoken': token} = parseCookies(context);

  const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1/'
  })
  
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}