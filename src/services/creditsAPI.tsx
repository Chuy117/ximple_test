import axios from 'axios';

const credits = axios.create({ baseURL: 'https://mocki.io/v1/' });

export default credits;