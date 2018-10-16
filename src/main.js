import Vue from 'vue';
import VeeValidate from 'vee-validate';

import App from './App';
import router from './router';
import store from './store';
import i18n from './common/i18n';
import './registerServiceWorker';
import './plugins/element';

// change fieldsBagName to avoid conflict with ElementUI
// read more at https://github.com/ElemeFE/element/issues/4720
Vue.use(VeeValidate, { fieldsBagName: 'vFields' });

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
