import { createApp } from 'vue'

import RequestsComponent from './components/Requests.vue'
import ScheduleComponent from './components/Schedule.vue'

const HcProcsComms = {
  Requests: (props = {}) => createApp(RequestsComponent, props),
  Schedule: (props = {}) => createApp(ScheduleComponent, props),
}

export default HcProcsComms

if (import.meta.env.DEV) {
  HcProcsComms.Requests().mount('#requests')
  HcProcsComms.Schedule().mount('#schedule')
}
