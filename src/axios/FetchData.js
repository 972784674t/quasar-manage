import _axios from './AxiosConfig'
import Vue from 'vue'

/**
 * Custom general axios package class
 * @param query Request body
 * @returns {*}
 * @author cimo
 */
const fetchData = query => {
  return _axios({
    url: query.url,
    method: query.method || 'POST',
    params: query.params,
    responseType: query.responseType || 'json',
    auth: query.auth || { username: localStorage.getItem('access_token') },
    data: query.data || '',
    type: query.type // For custom request type, please see axios-config.js
  })
}

Vue.prototype.$fetchData = fetchData
