import Gsheet from './gsheet'
import moment from 'moment'

export default class Schedule {
  constructor (data) {
    this.date = moment(data.gsx$date.$t, 'MM-DD-YYYY')
    this.type = data.gsx$type.$t
    this.commissioner = data.gsx$commissioner.$t
    this.pending = (data.gsx$pending.$t === 'TRUE') ? true : false
    this.quarterly = (data.gsx$quarterly.$t === 'TRUE') ? true : false
    this.excerpt = data.gsx$excerpt.$t
  }

  static get url () {
    return Gsheet.url(1)
  }
}
