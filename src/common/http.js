import axios from 'axios';

let host = 'http://10.100.31.236:9008/';
let http = axios.create({
    baseURL: host,
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});

export {host};
export default http;
