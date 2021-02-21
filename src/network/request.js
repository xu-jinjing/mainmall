import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 50000
  })


instance.interceptors.request.use(config => {
  return config;
},error => {
  return Promise.reject(error);
});
return instance(config)
}
