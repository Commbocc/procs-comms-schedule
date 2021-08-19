<template>
  <table class="table table-striped table-bordered table-responsive table-sm">
    <thead>
      <!--  -->
      <tr>
        <th>Date &amp; Type</th>
        <th>Excerpt</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ id, fields: item } in schedule.data" :key="id">
        <td>
          {{ item.Name }}
        </td>
        <td>
          {{ item.Excerpt }}
        </td>
        <td>
          <ul class="mb-0">
            <li v-if="item.Quarterly">
              <strong>Quarterly</strong>
            </li>
            <li v-if="schedule.Pending">
              <em>Pending submission of COIN request.</em>
            </li>
            <li v-if="item.Commissioner">
              Commissioner:
              {{ item.Commissioner }}
            </li>
          </ul>

          <!-- <pre>{{ item }}</pre> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { schedule, fetchSchedule } from '../lib'
export default {
  setup() {
    fetchSchedule()
    return { schedule }
  },
}
</script>
