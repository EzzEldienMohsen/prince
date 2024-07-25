import axios from 'axios';
var url = '';
export var autoFetch = axios.create({
  baseURL: url,
});
