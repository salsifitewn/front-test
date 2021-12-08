import axios from 'axios'

export default {
  async searchPeople(string) {
    const res = await axios.get(`https://swapi.dev/api/people/?search=${string}`)
    return res.data.results.map(({ name, url }) => ({ name, url }))
  },
  async get(url) {
    const res = await axios.get(url)
    return res.data
  },
}
