import axios from 'axios';

import { API_URL } from '@env';
//import {baseURL} from ''

export const client = axios.create({

  // baseURL: 'http://125.209.92.50:44009/SaleOrderApi/', //live db
  // baseURL: 'http://182.180.160.204:8080/fet/app/api/', //test db
  // baseURL: 'http://182.180.160.204:8080/fet/app/api/', //SP db
  //baseURL: 'https://solar.exodus.pk/fet/app/api/', //SP db

  baseURL: 'https://app.fent.com.pk/app/api/',
  // baseURL: 'https://fet.iot.fent.com.pk/app/api/',
  //  182.180.160.204:8080/fet/
});

client.interceptors.request.use(
  async config => {
    //  const token = await getLocalAccessToken();
    //  if (token) {
    //     config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['Content-Type'] = 'multipart/form-data';
    //    } else {
    //    config.headers['Content-Type'] = 'multipart/form-data'; //'application/json';
    //    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
