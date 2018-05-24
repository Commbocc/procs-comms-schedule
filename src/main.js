import Vue from 'vue'
import App from './App.vue'

import store from './store'

let Schedule = Vue.extend({
  store,
  extends: App
})

store.dispatch('fetchSchedules')

export { Schedule }
