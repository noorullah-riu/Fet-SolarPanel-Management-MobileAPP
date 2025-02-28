import {clientAdmin} from '../ClientAdmin';
import {createAsyncThunk} from '@reduxjs/toolkit';

const getStateTotal = createAsyncThunk('Admin/stat1', async Data => {
  return new Promise((resolve, reject) => {
    clientAdmin
      .get(`GetCurrentMonthSalesEmployeeWise`)
      .then(response => {
        resolve(response.data.data);
    //    console.log(response.data.data,"----State 1");
      })
      .catch(error => {
        reject(error.response);
      });
  });
});



const getPendingOrder = createAsyncThunk('Admin/PendingOrder', async Data => {
    return new Promise((resolve, reject) => {
      clientAdmin
        .get(`PendingOrderCurrentMonth`)
        .then(response => {
          resolve(response.data.data);
      //    console.log(response.data.data,"----State 1");
        })
        .catch(error => {
          reject(error.response);
        });
    });
  });

  const getApprovedOrder = createAsyncThunk('Admin/getApprovedOrder', async Data => {
    return new Promise((resolve, reject) => {
      clientAdmin
        .get(`ApprovedOrderCurrentMonth`)
        .then(response => {
          resolve(response.data.data);
      //    console.log(response.data.data,"----State 1");
        })
        .catch(error => {
          reject(error.response);
        });
    });
  });

  const getDispatchOrder = createAsyncThunk('Admin/getDispatchOrder', async Data => {
    return new Promise((resolve, reject) => {
      clientAdmin
        .get(`DispatchCurrentMonth`)
        .then(response => {
          resolve(response.data.data);
      //    console.log(response.data.data,"----State 1");
        })
        .catch(error => {
          reject(error.response);
        });
    });
  });

  const getRecoverOrder = createAsyncThunk('Admin/getRecoverOrder', async Data => {
    return new Promise((resolve, reject) => {
      clientAdmin
        .get(`RecoveryCurrentMonth`)
        .then(response => {
          resolve(response.data.data);
      //    console.log(response.data.data,"----State 1");
        })
        .catch(error => {
          reject(error.response);
        });
    });
  });

  const getRecoverWCustomerOrder = createAsyncThunk('Admin/getRecoverWCustomerOrder', async Data => {
    return new Promise((resolve, reject) => {
      clientAdmin
        .get(`CustomerWiseOrderAndRecovery`)
        .then(response => {
          resolve(response.data.data);
      //    console.log(response.data.data,"----State 1");
        })
        .catch(error => {
          reject(error.response);
        });
    });
  });

export {getStateTotal,getPendingOrder,getApprovedOrder,getDispatchOrder,getRecoverOrder,getRecoverWCustomerOrder};
