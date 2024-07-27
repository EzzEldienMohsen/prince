import axios from 'axios';
var url = 'https://prince-consulting.trendline.marketing/api/';
export var autoFetch = axios.create({
  baseURL: url,
});
