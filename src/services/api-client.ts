import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6decc492a20342c6b3a7819db02c4a34',
  },
})
