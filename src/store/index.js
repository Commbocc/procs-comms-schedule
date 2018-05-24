import Vue from 'vue'
import Vuex, { mapState, mapGetters } from 'vuex'

import schedules from './modules/schedules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { schedules }
})

export const storeMixin = {
  computed: {
    ...mapState({
      schedules: state => state.schedules.index
    }),
    ...mapGetters([
      'scheduleDateGroups'
    ])
  }
}
