import React, {useState, useEffect} from 'react';
import {getDataContext} from '../storage';

//#region something

const _0x2937 = [
  '228qGwqcK',
  '2034732ePRSjq',
  '234NFTYea',
  '152hPDTFC',
  'createContext',
  '1711DMvwJo',
  '4101LWyZTB',
  '373MHoqfG',
  '313884Xxdabe',
  '625132FNhWeO',
  '41670vtuiRw',
];
const _0x2acd = function (_0x1bb1c1, _0x3914ba) {
  _0x1bb1c1 = _0x1bb1c1 - 0xdc;
  let _0x29378b = _0x2937[_0x1bb1c1];
  return _0x29378b;
};
const _0x1ef3f6 = _0x2acd;
(function (_0x13b69c, _0x4189d0) {
  const _0x533e89 = _0x2acd;
  while (!![]) {
    try {
      const _0x1b9c84 =
        -parseInt(_0x533e89(0xe4)) +
        -parseInt(_0x533e89(0xe0)) * parseInt(_0x533e89(0xe2)) +
        -parseInt(_0x533e89(0xe6)) * parseInt(_0x533e89(0xdd)) +
        -parseInt(_0x533e89(0xe5)) +
        -parseInt(_0x533e89(0xe1)) * parseInt(_0x533e89(0xde)) +
        parseInt(_0x533e89(0xe3)) +
        parseInt(_0x533e89(0xdc));
      if (_0x1b9c84 === _0x4189d0) break;
      else _0x13b69c['push'](_0x13b69c['shift']());
    } catch (_0x5d36e9) {
      _0x13b69c['push'](_0x13b69c['shift']());
    }
  }
})(_0x2937, 0x5993b);
const EcomContext = React[_0x1ef3f6(0xdf)]();

//#endregion

export const EcomProvider = ({children}) => {
  const [Data, setData] = useState('');
  const [UserAuthentic, setUserAuthentic] = useState(false);
  const [UserType, setUserType] = useState('');
  const [plant, setplant] = useState({});

  const getData = async () => {
    const resp = await getDataContext();
    if (resp) {
      setData(resp);
      setUserAuthentic(!UserAuthentic);
    }
  };

  useEffect(() => {
 getData();
  }, []);

  return (
    <EcomContext.Provider
      value={{
        Data,
        setData,
        UserAuthentic,
        setUserAuthentic,

        UserType,
        setUserType,

     //  getData,
        plant,
        setplant,
      }}>
      {children}
    </EcomContext.Provider>
  );
};

export default EcomContext;
