import axios from 'axios';
import IImage from '../interfaces/App.interfaces';

interface FetchedData {
  hits: IImage[];
  total: number;
  totalHits: number;
}

axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '21175244-7c66133e2371767f9955ec31b';

export default function fetchImages(searchQuery: string, currentPage = 1) {
  return axios
    .get<FetchedData>(
      `/api/?q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=15&key=${API_KEY}`,
    )
    .then(response => response.data);
}
