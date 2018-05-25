<template lang="html">
  <div id="Requests">

    <table class="table table-striped table-bordered table-responsive table-sm">
      <thead class="bg-dark">
        <tr>
          <th v-for="header in requestsTableHeaders">
            <a href="#" @click.prevent="setOrder(header.key)" class="d-block text-white">
              {{ header.text }}
              <span v-if="orderBy == header.key" class="fas" :class="ascDescIcon"></span>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in orderedReqs">
          <td>
            {{ request.type }}
          </td>
          <td>
            {{ request.item }}
          </td>
          <td>
            {{ request.commissioner }}
          </td>
          <td class="text-nowrap text-center" :title="request.requested.format('dddd, MMMM d, YYYY', '-')">
            {{ request.requested.format('MM/DD/YY', '-') }}
          </td>
          <td class="text-nowrap text-center" :title="request.needed.format('dddd, MMMM d, YYYY')" :class="futureDateCellClass(request.needed.date)">
            {{ request.needed.format('MM/DD/YY') }}
          </td>
          <td class="text-nowrap text-center" :title="request.presentation.format('dddd, MMMM d, YYYY')" :class="futureDateCellClass(request.presentation.date)">
            {{ request.presentation.format('MM/DD/YY') }}
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { storeMixin } from '../store'
import moment from 'moment'

export default {
  name: 'Requests',
  mixins: [storeMixin],
  data () {
    return {
      orderBy: 'requested.date',
      asc: false
    }
  },
  methods: {
    setOrder (key) {
      if (this.orderBy === key) {
        this.asc = !this.asc
      }
      this.orderBy = key
    },
    futureDateCellClass (date) {
      return (date.isAfter()) ? 'bg-secondary text-white' : null
    }
  },
  computed: {
    orderedReqs () {
      return this.orderedRequests(this.orderBy, this.ascDescSring)
    },
    ascDescSring () {
      return (this.asc) ? 'asc' : 'desc'
    },
    ascDescIcon () {
      return (this.asc) ? 'fa-sort-up' : 'fa-sort-down'
    }
  },
  mounted () {
    this.fetchRequests()
  }
}
</script>
