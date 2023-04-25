import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '32921151-b779d8ccd68aa0b72c6aa486f';

export async function fetchPicture(query, page) {
  try {
    const responce = await axios.get(
      `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}

// const API_KEY = '32921151-b779d8ccd68aa0b72c6aa486f';
// axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 12,
// };

// export const getImages = (q, page) => {
//   return axios.get('/search', { params: { q, page } }).then(response => {
//     console.log(response.data);
//     return response.data;
//   });
// };
