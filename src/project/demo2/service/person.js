import http from '@/common/http';

const fetchPersonData = (callback) => {
    return http
        .post('person', {
            uid: 20170331
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

export {fetchPersonData};
