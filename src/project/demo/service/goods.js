import host from '@/common/host';
import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: host,
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});

const fetchGoodsData = (callback) => {
    return axiosInstance
        .post('goods', {
            gid: 20170331
        })
        .then(function (response) {
            console.log(response);
            let responseData = response.data;
            callback && callback(responseData.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export {fetchGoodsData};
