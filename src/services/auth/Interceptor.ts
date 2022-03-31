import axios from 'axios';
import authService from './AuthService';

/** Interface to describe a flexible object */
interface FlexObj {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const authAxios = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_BASE_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  responseType: 'json',
});

authAxios.interceptors.request.use(
  (config: FlexObj) => {
    // if (authService.isLoggedIn) {
    //     config.headers.Authorization = `Bearer Asif ${authService.getAuthToken}`;
    // }
    console.log('request config in interceptor ', config);
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  },
);
// authAxios.interceptors.response.use(
//     (response: any) => {
//         return response;
//     },
//     async (error: any) => {
//         if (error.response !== undefined) {
//             if ((error.response.status === 401 || error.response.status === 422) && authService.isLoggedIn) {
//                 const headersRT = {
//                     headers: {
//                         Authorization: `Bearer ${authService.getRefreshToken}`,
//                     },
//                 };
//                 await axios
//                     .post(`${process.env.REACT_APP_BASE_API_URL}/auth/refresh`, {}, headersRT)
//                     .then((tokenRefreshResponse: any) => {
//                         sessionStorage.setItem('accessToken', tokenRefreshResponse.data.access_token);
//                         sessionStorage.setItem('refreshToken', tokenRefreshResponse.data.refresh_token);
//                         window.location.reload();
//                     })
//                     .catch((error: any) => {
//                         if (
//                             error.response.request.responseURL === `${process.env.REACT_APP_BASE_API_URL}/auth/refresh`
//                         ) {
//                             sessionStorage.clear();
//                             window.location.reload();
//                         }
//                     });
//             }
//         }

//         if (error.response && error.response.data) {
//             return Promise.reject(error.response.data);
//         }
//         return Promise.reject(error.message);
//     },
// );

export default authAxios;
