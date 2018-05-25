import Vue from 'vue'
import Vuex, { mapState, mapGetters, mapActions } from 'vuex'

import schedules from './modules/schedules'
import requests from './modules/requests'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { schedules, requests },
  actions: {
    fetchAll ({ dispatch }) {
      dispatch('fetchSchedules')
      dispatch('fetchRequests')
    }
  }
})

export const storeMixin = {
  computed: {
    ...mapState({
      schedules: state => state.schedules.index,
      requests: state => state.requests.index
    }),
    ...mapGetters([
      'scheduleDateGroups',
      'orderedRequests',
      'requestsTableHeaders'
    ])
  },
  methods: mapActions([
    'fetchSchedules',
    'fetchRequests'
  ])
}
