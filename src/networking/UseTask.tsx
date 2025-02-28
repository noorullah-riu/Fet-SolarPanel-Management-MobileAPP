import {useQuery} from 'react-query';
import {client} from './Client';


export function useTasks(url ?:any) {
  return useQuery(['Login',url], async () => {
    const {data} = await client.get(url);
    return data;
  });
}                                                                                               

export function useTask(url:any ) {
  return useQuery(['customer'], async () => {
    const {data} = await client.get(url);
    return data;
  }); 
}

export function useTaskSales(url:any ) {
  return useQuery(['Sales'], async () => {
    const {data} = await client.get(url);
    return data;
  }); 
}


export function useTaskProduct(url:any ) {
  return useQuery(['product'], async () => {
    const {data} = await client.get(url);
    return data;
  }); 
}

export function useTaskOrders(url:any ) {
  return useQuery(['orders'], async () => {
    const {data} = await client.get(url);
    return data;
  }); 
}

export function useTaskOrderDetails(url:any ,docNum:any) {
  return useQuery(['order-Detail',docNum], async () => {
    const {data} = await client.get(url);
    return data;
  }); 
}
