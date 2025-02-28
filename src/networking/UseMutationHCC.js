import {useMutation} from 'react-query';
import {client} from './Client';


export function useMutationHCCGet(url) {
  return useMutation((data) => {
    return client.get(url, data, {
      transformRequest: (data, headers) => {
        return JSON.parse(data) ;
      }
    });
  });
}

export function useMutationHCCPost(url) {
  return useMutation((data) => {
    return client.post(url, data, {
      transformRequest: (data, headers) => {
        return  data;
      }
    });
  });
}