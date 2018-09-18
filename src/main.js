import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios'
import { store } from './store/store';
import { routes } from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter);

//axios
axios.defaults.baseURL = 'https://vue-check.firebaseio.com/'
axios.defaults.headers.get['Accepts'] = 'application/json'
const reqInterceptor = axios.interceptors.request.use(config => {
        // console.log('Request Interceptor', config)
        return config
      })
const resInterceptor = axios.interceptors.response.use(res => {
        // console.log('Response Interceptor', res)
        return res
      })
axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)
export const router = new VueRouter({
    	mode: 'history',
	    routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
