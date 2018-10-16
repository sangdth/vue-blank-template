import axios from 'axios';
import Vue from 'vue';
import VueAxios from 'vue-axios';

const api = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = 'https://api.github.com';
  },

  setHeaders(token, callback) {
    Vue.axios.defaults.headers.common.Authorization = `token ${token}`;
    callback();
  },

  get(resource) {
    return Vue.axios
      .get(resource)
      .catch((e) => {
        throw e;
      });
  },

  query(resource, slug = '') {
    return Vue.axios
      .get(`${resource}?${slug}`)
      .catch((e) => {
        throw e;
      });
  },

  post(resource, data) {
    return Vue.axios
      .post(resource, data)
      .catch((e) => {
        throw e;
      });
  },

  put(resource, data) {
    return Vue.axios
      .put(resource, data)
      .catch((e) => {
        throw e;
      });
  },

  delete(resource) {
    return Vue.axios
      .delete(resource)
      .catch((e) => {
        throw e;
      });
  },
};

export default api;
