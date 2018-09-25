import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyB65qJ9Db6iMqawbed5pgS8f9OtM3wf1wI',
      authDomain: 'ads-project-73f9f.firebaseapp.com',
      databaseURL: 'https://ads-project-73f9f.firebaseio.com',
      projectId: 'ads-project-73f9f',
      storageBucket: 'ads-project-73f9f.appspot.com',
      messagingSenderId: '728412869283'
    })
  }
})
