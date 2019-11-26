import store from '../../redux/store';
//handle request
export const requestInterceptor = (config) => {
    const { user:{
        data:{
          token
        }
      }} = store.getState();
      config.headers.Authorization = token;
      return config;
}

//handle request error
export const requestErrorInterceptor = (error) => {
    return Promise.reject(error);
}

//handle response
export const responseInterceptor = (response) => response.data;

//handle response error  
export const responseErrorInterceptor = (error) => {
    if(error.response.status !== 401){
        return Promise.reject(error)
    }
    //handle unauthorised api error
}