<template>
  <div id="Schedule">

    <div v-for="group in scheduleDateGroups" class="card mb-2">
      <h3 class="card-header d-flex justify-content-between align-items-center" :class="group.pastClass">
        {{ group.date.format('ddd, MMM D YYYY') }}
        <small v-if="group.quarterly" class="text-warning">
          Quarterly
        </small>
      </h3>

      <div v-if="group.available" class="card-body">
        <strong>
          Available
        </strong>
      </div>

      <div v-else v-for="schedule in group.schedules" class="card-body border border-light">
        <p class="card-text">
          {{ schedule.excerpt }}
        </p>
        <ul class="mb-0">
          <li v-if="schedule.pending">
            <em>Pending submission of COIN request.</em>
          </li>
          <li v-if="schedule.type">
            Type:
            {{ schedule.type }}
          </li>
          <li v-if="schedule.commissioner">
            Commissioner:
            {{ schedule.commissioner }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { storeMixin } from '../store'

export default {
  name: 'Schedule',
  mixins: [storeMixin],
  mounted () {
    this.fetchSchedules()
  }
}
</script>
