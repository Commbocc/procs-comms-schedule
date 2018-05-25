import Vue from 'vue'

import Schedule from './components/Schedule.vue'
import Requests from './components/Requests.vue'

import store from './store'

let schedule = Vue.extend({
  store,
  extends: Schedule
})

let requests = Vue.extend({
  store,
  extends: Requests
})

export { schedule, requests }
