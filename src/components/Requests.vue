<template>
  <table class="table table-striped table-bordered table-responsive table-sm">
    <thead class="bg-dark text-white">
      <tr>
        <th>Item</th>
        <th>Commissioner</th>
        <th>Date Requested</th>
        <th>Date Needed</th>
        <th>Presentation Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ id, fields: request } in requests.data" :key="id">
        <td>
          {{ request.Name }}
        </td>
        <td>
          {{ request.Commissioner }}
        </td>
        <td class="text-center">
          {{ request.DateRequested }}
        </td>
        <td class="text-center">
          {{ request.DateNeeded }}
        </td>
        <td class="text-center">
          {{ request.PresentationDate }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { requests, fetchRequests } from '../lib'

export default {
  setup() {
    fetchRequests()
    return { requests }
  },
}
</script>
