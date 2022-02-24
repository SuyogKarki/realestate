import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async url => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'e65bc321a5mshe348f5243406b2bp147f29jsn34c2d21d2e0a',
    },
  });
  return data;
};
