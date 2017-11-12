import axios from 'axios';

export function subscribe(email, category) {
  return axios({
    method: 'post',
    // url: '/api',
    url: 'https://revoltsneakers.herokuapp.com/',
    data: {
      email,
      category,
    }
  })
}
