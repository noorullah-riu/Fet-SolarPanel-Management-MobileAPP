import axios from 'axios';

import {API_URL} from '@env';
//import {baseURL} from ''

export const clientAdmin = axios.create({
// baseURL: 'http://125.209.92.50:44009/SaleOrderApi/', //live db
 baseURL: "http://125.209.92.50:44009/Admin/SaleOrderApi/"
//  baseURL: 'http://125.209.92.50:8097/SaleOrderApi/', //test db
});
