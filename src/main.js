// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify({
    iconfont: 'mdi',
    theme: {
      themes: {
        dark: {
          primary: '#E3F2FD',
          secondary: '#B0BEC5',
          accent: '#8C9EFF',
          error: '#B71C1C',
          background: '#00A86B'
        }
      }
    }
  }),
  components: { App },
  template: '<App/>'
})
