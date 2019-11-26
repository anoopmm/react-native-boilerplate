import Axios from 'axios';
import { requestInterceptor ,
         requestErrorInterceptor,
         responseInterceptor,
         responseErrorInterceptor 
} from './interceptors';

export const Api = Axios.create({
  baseURL: 'http://www.mocky.io',
})

Api.interceptors.request.use(requestInterceptor,requestErrorInterceptor);
Api.interceptors.response.use(responseInterceptor,responseErrorInterceptor);


//unauthorised API's
export const API_LOGIN = '/v2/5185415ba171ea3a00704eed';

//authorised API's
