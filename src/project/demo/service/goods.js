import http from '@/common/http';

const fetchGoodsData = (callback) => {
    return http
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
