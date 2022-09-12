import axios from 'axios';

const CLIENT_ID = '75eeab88ecec475b8222e11545588604';
const CLIENT_SECRET = '3bc78353584846baa1c0ce0fe317fb26';
const REDIRECT_URI = 'http://localhost:8081';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

export {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
  instance,
};
