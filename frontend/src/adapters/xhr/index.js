import Axios from 'axios';
import { getCurrentOrganisation, getAuthToken, getLoggedInUserData } from '../auth';

function returnAxiosInstance() {
  return Axios.create({
    baseURL: 'https://chess.zuri.chat/api/v1/',
    // baseURL: "//localhost:5050/api/v1/",
    headers: {
      'Content-Type': 'application/json',
      Organisation: getCurrentOrganisation(),
      Authorization: `Bearer ${getAuthToken()}`,
      user_id: getLoggedInUserData().user_id,
    },
    validateStatus(status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });
}

export function get(url, requestData) {
  const axios = returnAxiosInstance();
  if (requestData) {
    return axios.get(url, { params: requestData });
  }
  return axios.get(url);
}

export function post(url, requestData) {
  const axios = returnAxiosInstance();
  return axios.post(url, requestData);
}

export function patch(url, requestData) {
  const axios = returnAxiosInstance();
  return axios.patch(url, requestData);
}
