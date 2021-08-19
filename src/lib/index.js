import { reactive } from 'vue'
import airtable from './airtable'

export const requests = reactive({
  error: '',
  loading: false,
  data: [],
})

export const schedule = reactive({
  error: '',
  loading: false,
  data: [],
})

//

export async function fetchRequests() {
  try {
    requests.loading = true
    const { data } = await airtable.get('/requests', {
      params: {
        view: 'AppView',
      },
    })
    requests.data = data.records
  } catch (error) {
    requests.error = error.message
  } finally {
    requests.loading = false
  }
}

export async function fetchSchedule() {
  try {
    schedule.loading = true
    const { data } = await airtable.get('/schedule', {
      params: {
        view: 'AppView',
      },
    })
    schedule.data = data.records
  } catch (error) {
    schedule.error = error.message
  } finally {
    schedule.loading = false
  }
}
