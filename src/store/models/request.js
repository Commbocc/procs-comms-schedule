import Gsheet from './gsheet'
import moment from 'moment'

export default class Request {
  constructor (data) {
    this.type = data.gsx$requesttype.$t
    this.item = data.gsx$itemrequested.$t
    this.commissioner = data.gsx$requestingcommissioner.$t
    this.requested = this.dateFunc(data.gsx$daterequested.$t)
    this.needed = this.dateFunc(data.gsx$dateneeded.$t)
    this.presentation = this.dateFunc(data.gsx$presentationdate.$t)
  }

  dateFunc (property) {
    return {
      date: moment(property, 'MM-DD-YYYY'),
      format: function (format = 'll', string = 'TBD') {
        return (this.date.isValid()) ? this.date.format(format) : string
      }
    }
  }

  static get url () {
    return Gsheet.url(2)
  }

  static get tableHeaders () {
    return [
      {
        key: 'type',
        text: 'Request Type'
      },
      {
        key: 'item',
        text: 'Item Requested'
      },
      {
        key: 'commissioner',
        text: 'Requesting Commissioner'
      },
      {
        key: 'requested.date',
        text: 'Date Requested'
      },
      {
        key: 'needed.date',
        text: 'Date Needed'
      },
      {
        key: 'presentation.date',
        text: 'Presentation Date'
      }
    ]
  }
}
