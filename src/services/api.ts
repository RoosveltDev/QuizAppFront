import axios from 'axios';
import * as dotenv from 'dotenv';

const instance = axios.create({ baseURL: process.env.BACKEND_URL });

export default instance;
