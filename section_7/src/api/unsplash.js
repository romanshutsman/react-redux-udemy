import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID 3ac1c2785f51475465715c9dc7a873675aa743e07eac7af68ff70ddc0c6ae329'
      }
});