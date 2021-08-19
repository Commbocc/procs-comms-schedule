import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.airtable.com/v0/appnxWI0G168XdRnz',
  // commbocc@gmail.com account read only api key
  headers: { Authorization: `Bearer key1XrFuYhG1GKHvu` },
})
