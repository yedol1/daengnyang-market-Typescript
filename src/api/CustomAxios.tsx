import axios, { AxiosInstance } from 'axios';

const BASIC_URL = process.env.REACT_APP_API_BASIC_URL;

export const imgApiInstance: AxiosInstance = axios.create({
  baseURL: BASIC_URL + '/image',
  headers: {
    'Content-type': 'multipart/form-data',
  },
  withCredentials: true,
});

export const userApiInstance: AxiosInstance = axios.create({
  baseURL: BASIC_URL + '/user',
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: false,
});

export const profileApiInstance: AxiosInstance = axios.create({
  baseURL: BASIC_URL + '/profile',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

export const postApiInstance: AxiosInstance = axios.create({
  baseURL: BASIC_URL + '/post',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

export const productApiInstance: AxiosInstance = axios.create({
  baseURL: BASIC_URL + '/product',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

export const checkTokenApiInstance: AxiosInstance = axios.create({
  baseURL: BASIC_URL + 'user/checktoken',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-type': 'application/json',
  },
  withCredentials: true,
});
