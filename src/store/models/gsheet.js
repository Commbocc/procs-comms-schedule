export default class Gsheet {
  static url (tableId = 1) {
    let sheetId = '1eDdkXaIT7ik77UAb_U2jCne53ah54qxkXOm5yRS23kk'
    return `https://spreadsheets.google.com/feeds/list/${sheetId}/${tableId}/public/values?alt=json`
  }
}
