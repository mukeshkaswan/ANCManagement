import axios from 'axios';
import Idx from 'idx';
export const BaseURL = `http://49.50.69.229:8010/api/v1/`;//Preprod

const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BaseURL,
    headers: {
      Accept: "application/json",
      // "Content-Type": "multipart/form-data",
      //  "Content-Type": "application/x-www-form-urlencoded",
      //Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODAxLCJ1c2VybmFtZSI6InR5dUBtYWlsaW5hdG9yLmNvbSIsImV4cCI6MTY0ODAyMjA3MCwiZW1haWwiOiJ0eXVAbWFpbGluYXRvci5jb20iLCJvcmlnX2lhdCI6MTYyMjEwMjA3MH0.zkHW8Nxw2qGMNlghhXI_03lJ1QhXOFBzZ_KlFgkjG2M`
    },
    timeout: 1000 * 60,
  });
  // Add a request interceptor
  instance.interceptors.request.use(
    config => {
      console.log('axios data config', config);
      return config;
    },
    error => Promise.reject(error),
  );
  // instance.interceptors.request.use(config => {
  //   console.log("ldfjslfjldsajfdslajflsda-__________________config", JSON.stringify(config, undefined, 2))
  //   if (config.data instanceof FormData) {
  //     Object.assign(config.headers, config.data);
  //   }
  //   return config;
  //   // error => Promise.reject(error),
  // });

  // Add a response interceptor
  instance.interceptors.response.use(
    response => {
      console.log('----------fdsaf-d-sfa--gdh-fgh-fdh-fghfdg', response);
      return response;
    },
    error => {
      if (Idx(error, _ => _.response.data)) {
        return Promise.reject(error.response.data);
      }

      return Promise.reject(error);
    },
  );

  return instance;
};




export default getAxiosInstance;
