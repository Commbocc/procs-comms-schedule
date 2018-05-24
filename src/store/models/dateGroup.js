import _ from 'lodash'
import moment from 'moment'

export default class DateGroup {
  constructor (schedules) {
    this.date = schedules[0].date
    this.quarterly = schedules[0].quarterly
    this.schedules = schedules
    this.hasPast = this.date < moment()
    this.available = !_.compact(this.schedules.map(s => s.type)).length
  }

  get pastClass () {
    return (this.hasPast) ? 'bg-light text-muted' : 'bg-primary text-light'
  }
}
