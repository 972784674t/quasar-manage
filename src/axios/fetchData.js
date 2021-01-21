import _axios from './axiosConfig'
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
    params: query.params, // 请求参数
    responseType: query.responseType || 'json',
    auth: query.auth || { username: localStorage.getItem('access_token') },
    data: query.data || ''
  })
}

Vue.prototype.$fetchData = fetchData
