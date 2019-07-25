import axios from 'axios'

const KEY = 'AIzaSyD0q0PUOaHMDU1oaik-73cuRarp3fgxEgk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
