import _ from 'lodash'
import Request from '../models/request'

export default {
  state: {
    index: []
  },
  actions: {
    fetchRequests ({ commit }) {
      fetch(Request.url).then(res => res.json()).then(data => {
        commit('setRequests', data.feed.entry.map(x => new Request(x)))
      })
    }
  },
  mutations: {
    setRequests (state, data) {
      state.index = data
    }
  },
  getters: {
    orderedRequests: state => (iteratees, orders) => {
      return _.orderBy(state.index, iteratees, orders)
    },
    requestsTableHeaders: state => {
      return Request.tableHeaders
    }
  }
}
