import _ from 'lodash'
import Schedule from '../models/schedule'
import DateGroup from '../models/dateGroup'

export default {
  state: {
    index: []
  },
  actions: {
    fetchSchedules ({ commit }) {
      fetch(Schedule.url).then(res => res.json()).then(data => {
        commit('setSchedules', data.feed.entry.map(x => new Schedule(x)))
      })
    }
  },
  mutations: {
    setSchedules (state, data) {
      state.index = data
    }
  },
  getters: {
    scheduleDateGroups: state => {
      let groups = _.groupBy(state.index.filter(s => s.date.isValid()), s => s.date.valueOf())
      groups = _.map(groups, (value, key) => {
        return new DateGroup(value)
      })
      return _.orderBy(groups, ['hasPast', 'date'])
    }
  }
}
