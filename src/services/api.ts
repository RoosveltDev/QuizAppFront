import axios from 'axios';
import * as dotenv from 'dotenv';

const instance = axios.create({ baseURL: 'https://quizappback.onrender.com/api' });

export default instance;
