import { client } from '../Client';
import { createAsyncThunk } from '@reduxjs/toolkit';

const tokenHard =
  'aa2284ebaff592028f9918539e0f7c384599fee898e9411d62bf66d9cfb15d1ecd15ecee171be4702eb98ef23cf629a248da1dff21b75c5206f937cf962da0f0w2V5gaAnV5gYhRwsbXEVODr4HtUCY9GZeh4HoW--1RCEE--2';

const userToken =
  'ad5d85fbce752b00f007dce9bc7f24b20a95c24458e820cec4d69ee0844ebcaff3988b148c328d491d342557d916568e0e60194c9f02156c7af716618d8e84a1sIw5S9qfvtSwfiRIjjpZgH4x4KWRN3CdV6nDugtt6fI--2';

const postSignUp = createAsyncThunk('Customer/register', async Data => {
  console.log(Data, 'data for post register');
  return new Promise((resolve, reject) => {
    client
      .post(`register`, {
        appToken: tokenHard,
        name: Data.Name,
        email: Data.Email,
        password: Data.Password,
      })
      .then(response => {
        //    console.log(response.data);
        resolve(response.data);
      })
      .catch(error => {
        //    console.log(error, 'SignUp Error');
        reject(error.response);
      });
  });
});

const postLogin = createAsyncThunk('Customer/login', async Data => {
  console.log(Data, 'data for post');
  return new Promise((resolve, reject) => {
    client
      .post(`login`, {
        appToken: tokenHard,
        username: Data.email, //'ali@gmail.com', //
        password: Data.password, //'123456', //
      })
      .then(response => {
        console.log(response, 'login Error');
        resolve(response.data);
      })
      .catch(error => {
        //  console.log(error.response.data, 'login Error');
        reject(error.response);
      });
  });
});

const getPlantHome = createAsyncThunk('Customer/getPlantHome', async Data => {
  // console.log(Data, 'data for post');
  return new Promise((resolve, reject) => {
    client
      .post(`plants`, {
        appToken: tokenHard,
        userToken: Data.sessionId, //Data.email,
        userId: Data.userData.userId, // 5, //Data.password,
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        //  console.log(error.response.data, 'login Error');
        reject(error.response);
      });
  });
});

const getDevicesList = createAsyncThunk(
  'Customer/getDevicesList',
  async Data => {
    // console.log(Data, 'data for post');
    return new Promise((resolve, reject) => {
      client
        .post(`plant_devices`, {
          appToken: tokenHard,
          userToken: Data?.token?.sessionId, //Data.email,
          userId: Data?.token?.userData?.userId,
          plantId: Data?.plant?.plant_id,
          type: '',
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);
const getDeviceDetail = createAsyncThunk(
  'Customer/device_details',
  async Data => {
    // console.log(Data.routeVal, 'data for post device_details Load');
    return new Promise((resolve, reject) => {
      client
        .post(`device_details`, {
          appToken: tokenHard,
          userToken: Data.token?.sessionId, //Data.email,
          plantId: Data.plant?.plant_id,
          deviceId: Data.routeVal.device,
          deviceType: Data.routeVal.type,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);
const getChartInverter1 = createAsyncThunk(
  'Customer/getChartInverter1',
  async Data => {
    //  console.log(Data.date, 'data for post device_details_chart');
    return new Promise((resolve, reject) => {
      client
        .post(`device_details_chart`, {
          appToken: tokenHard,
          userToken: Data?.token?.sessionId, //userToken, //Data.email,
          plantId: Data?.plant?.plant_id, //1,
          deviceId: Data?.routeVal?.device,
          deviceType: Data?.routeVal?.type, // "Inverter",
          date: Data.date,
          //   ws_type:"",
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);
const getChartWS = createAsyncThunk('Customer/getChartWS', async Data => {
  //  console.log(Data.date, 'data for post device_details_chart');
  return new Promise((resolve, reject) => {
    client
      .post(`device_details_chart`, {
        appToken: tokenHard,
        userToken: Data?.token?.sessionId, //userToken, //Data.email,
        plantId: Data?.plant?.plant_id, //1,
        deviceId: 6, // Data?.routeVal?.device,
        deviceType: 'Weather_station', // Data?.routeVal?.type, // "Inverter",
        date: Data.date,
        ws_type: Data.DeviceKey, //"Wind_Direction",
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        //  console.log(error.response.data, 'login Error');
        reject(error.response);
      });
  });
});
const getChartInverterIV = createAsyncThunk(
  'Customer/getChartInverterIV',
  async Data => {
    //   console.log(Data.date, 'data for post getChartInverterIV');
    return new Promise((resolve, reject) => {
      client
        .post(`device_details_iv_curve_chart`, {
          appToken: tokenHard,
          userToken: Data?.token?.sessionId, //userToken, //Data.email,
          deviceId: Data?.deviceID,
          date: Data.date,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);

const getChartDaily = createAsyncThunk('Customer/getChartDaily', async Data => {
  console.log(Data.date, 'data for post getChartDaily');
  return new Promise((resolve, reject) => {
    client
      .post(`charts`, {
        appToken: tokenHard,
        userToken: Data?.token?.sessionId, //userToken, //Data.email,
        plantId: Data?.plant?.plant_id,
        day: Data.Time.date, //"17",//
        month: Data.Time.month, // "07",//
        year: Data.Time.year,
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        //  console.log(error.response.data, 'login Error');
        reject(error.response);
      });
  });
});

const getChartDailyFullScreen = createAsyncThunk('Customer/getChartDailyFullScreen', async Data => {
  //console.log(Data.date, 'data for post getChartDaily');
  return new Promise((resolve, reject) => {
    client
      .post(`charts_full_screen`, {
        appToken: tokenHard,
        userToken: Data?.token?.sessionId, //userToken, //Data.email,
        plantId: Data?.plant?.plant_id,
        day: Data.Time.date, //"17",//
        month: Data.Time.month, // "07",//
        year: Data.Time.year,
      })
      .then(response => {
     //   console.log(response.data, 'CHarts ____----____');
        resolve(response.data);

      })
      .catch(error => {
        //  console.log(error.response.data, 'login Error');
        reject(error.response);
      });
  });
});

const getdevice_details_chart_full_screen = createAsyncThunk('Customer/device_details_chart_full_screen', async Data => {
  //console.log(Data.date, 'data for post getChartDaily');
  return new Promise((resolve, reject) => {
    client
      .post(`device_details_chart_full_screen`, {
        appToken: tokenHard,
        userToken: Data?.token?.sessionId, //userToken, //Data.email,
        plantId: Data?.plant?.plant_id, //1,
        deviceId: Data?.routeVal?.device,
        deviceType: Data?.routeVal?.type, // "Inverter",
        date: Data.date,
      })
      .then(response => {
     //   console.log(response.data, 'CHarts ____----____');
        resolve(response.data);

      })
      .catch(error => {
        //  console.log(error.response.data, 'login Error');
        reject(error.response);
      });
  });
});

const getdevice_details_chart_dc_data = createAsyncThunk('Customer/device_details_chart_dc_data', async Data => {
  //console.log(Data.date, 'data for post getChartDaily');
  return new Promise((resolve, reject) => {
    client
      .post(`device_details_chart_dc_data`, {
        appToken: tokenHard,
        userToken: Data?.token?.sessionId, //userToken, //Data.email,
        plantId: Data?.plant?.plant_id, //1,
        deviceId: Data?.routeVal?.device,
        deviceType: Data?.routeVal?.type, // "Inverter",
        date: Data.date,
      })
      .then(response => {
     //   console.log(response.data, 'CHarts ____----____');
        resolve(response.data);

      })
      .catch(error => {
        //  console.log(error.response.data, 'login Error');
        reject(error.response);
      });
  });
});



const getChartMonthly = createAsyncThunk(
  'Customer/getChartMonthly',
  async Data => {
    console.log(Data.date, 'data for post getChartMonthly');
    return new Promise((resolve, reject) => {
      client
        .post(`charts`, {
          appToken: tokenHard,
          userToken: Data?.token?.sessionId, //userToken, //Data.email,
          plantId: Data?.plant?.plant_id,
          month: Data.Time.month,
          year: Data.Time.year,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);
const getBarChartMonthly = createAsyncThunk(
  'Customer/getBarChartMonthly',
  async Data => {
    console.log(Data.date, 'data for post getChartMonthly Bar');
    return new Promise((resolve, reject) => {
      client
        .post(`bar_data_mix`, {
          appToken: tokenHard,
          userToken: Data?.token?.sessionId, //userToken, //Data.email,
          plantId: Data?.plant?.plant_id,
          month: Data.date,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);
const getBarChartYearly = createAsyncThunk(
  'Customer/getBarChartYearly',
  async Data => {
    console.log(Data.date, 'data for post getChartYearly Bar');
    return new Promise((resolve, reject) => {
      client
        .post(`bar_data_mix`, {
          appToken: tokenHard,
          userToken: Data?.token?.sessionId, //userToken, //Data.email,
          plantId: Data?.plant?.plant_id,
          year: Data.date,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);
const getBarChartAlltime = createAsyncThunk(
  'Customer/getBarChartYearly',
  async Data => {
    console.log(Data.date, 'data for post getChartYearly Bar');
    return new Promise((resolve, reject) => {
      client
        .post(`bar_data_mix`, {
          appToken: tokenHard,
          userToken: Data?.token?.sessionId, //userToken, //Data.email,
          plantId: Data?.plant?.plant_id,
          //   year: Data.date,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);
const getChartYearly = createAsyncThunk(
  'Customer/getChartYearly',
  async Data => {
    console.log(Data.date, 'data for post getChartyear');
    return new Promise((resolve, reject) => {
      client
        .post(`charts`, {
          appToken: tokenHard,
          userToken: Data?.token?.sessionId, //userToken, //Data.email,
          plantId: Data?.plant?.plant_id,
          year: Data.date,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);
const getChartLifeTime = createAsyncThunk(
  'Customer/getChartLifeTime',
  async Data => {
    //  console.log(Data, 'data for post getChartDaily');
    return new Promise((resolve, reject) => {
      client
        .post(`charts`, {
          appToken: tokenHard,
          userToken: Data?.token?.sessionId, //userToken, //Data.email,
          plantId: Data?.plant?.plant_id,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);

const update_profileE = createAsyncThunk(
  'Customer/update_profile',
  async Data => {
    // console.log(Data, 'data for post');
    return new Promise((resolve, reject) => {
      client
        .post(`update_profile`, {
          appToken: tokenHard,
          userToken: Data.Data.sessionId, //Data.email,
          userId: Data.Data.userData.userId, // 5, //Data.password,
          new_email: Data.newEmail,
          old_email: Data.oldEmail,
          //   new_password:"",
          //  old_password:"",
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);
const addPlant = createAsyncThunk('Customer/add_new_plant', async Data => {
  console.log(Data, 'data for post add p');
  return new Promise((resolve, reject) => {
    client
      .post(`add_new_plant`, {
        appToken: tokenHard,
        userToken: Data.Data.sessionId, //Data.email,
        userId: Data.Data.userData.userId, // 5, //Data.password,
        accessCode: Data.AC,

        //   new_password:"",
        //  old_password:"",
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        //  console.log(error.response.data, 'login Error');
        reject(error.response);
      });
  });
});

const update_profileP = createAsyncThunk(
  'Customer/update_profile',
  async Data => {
    // console.log(Data, 'data for post');
    return new Promise((resolve, reject) => {
      client
        .post(`update_profile`, {
          appToken: tokenHard,
          userToken: Data.Data.sessionId, //Data.email,
          userId: Data.Data.userData.userId, // 5, //Data.password,
          //  new_email:"",
          //  old_email:"",
          new_password: Data.newPass,
          old_password: Data.oldPass,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          //  console.log(error.response.data, 'login Error');
          reject(error.response);
        });
    });
  },
);

const getCustomers = createAsyncThunk('Customers/getCustomers', async Data => {
  return new Promise((resolve, reject) => {
    client
      .get(
        `GetCustomer?GroupCode=${Data.territory}&SlpCode=${Data.salePersonCode}`,
      )
      .then(response => {
        resolve(response.data.Data);
      })
      .catch(error => {
        reject(error.response);
      });
  });
});

const getProducts = createAsyncThunk('Products/getProducts', async Data => {
  return new Promise((resolve, reject) => {
    client
      .get(
        `GetAllSAPItemsWithRespToCust?customerID=${Data.CardCode}&customerFName=${Data.CardFName}`,
      )
      .then(response => {
        //    console.log('api fetch data  ======>>>> Products');
        resolve(response.data.data);
      })
      .catch(error => {
        // console.log(error.response);
        reject(error.response);
      });
  });
});

const getSalesBlanket = createAsyncThunk('getSalesBlanket', async Data => {
  return new Promise((resolve, reject) => {
    client
      .get(`GetAllSalesBlanket?slpcode=${Data.salePersonCode}`)
      .then(response => {
        console.log('api fetch data  ======>>>> blnkt', response.data);
        resolve(response.data);
      })
      .catch(error => {
        // console.log(error.response);
        reject(error.response);
      });
  });
});

const getOrders = createAsyncThunk('Orders/getOrders', async Data => {
  return new Promise((resolve, reject) => {
    ///  console.log("api call ",Data);
    client
      .get(
        `GetSaleOrderBySalesPerson?slpCode=${Data.code}&docDate=${Data.date}`,
        // `GetSaleOrderBySalesPerson?slpCode=${Data.code}&docDate=2023-10-10`,
      )
      .then(response => {
        //   console.log('api fetch data  ======>>>> Orders', response.data.data);
        resolve(response.data.data);
      })
      .catch(error => {
        // console.log(error.response);
        reject(error.response);
      });
  });
});

const getPendingOrders = createAsyncThunk(
  'Orders/getPendingOrders',
  async Data => {
    return new Promise((resolve, reject) => {
      client
        .get(`PendingOrderList?slpCode=${Data.code}`)
        .then(response => {
          ////   console.log(' pending ======>>>>', response.data.data);
          resolve(response.data.data);
        })
        .catch(error => {
          // console.log(error.response);
          reject(error.response);
        });
    });
  },
);

export {
  postSignUp,
  postLogin,
  getPlantHome,
  getDevicesList,
  getDeviceDetail,
  getChartInverter1,
  getChartInverterIV,
  update_profileP,
  update_profileE,
  getChartDaily,
  getChartDailyFullScreen,
  getdevice_details_chart_full_screen,
  getdevice_details_chart_dc_data,
  getChartMonthly,
  getBarChartMonthly,
  getChartYearly,
  getBarChartYearly,
  getChartLifeTime,
  getBarChartAlltime,
  addPlant,
  getChartWS,
  // --------------
  getCustomers,
  getProducts,
  getSalesBlanket,
  getOrders,
  getPendingOrders,
};
