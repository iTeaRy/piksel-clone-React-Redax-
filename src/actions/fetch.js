export const buildGetParams = () => buildParams('GET');

export const buildDeleteParams = () => buildParams('DELETE');

export const buildPostParams = body => {
    let params = buildParams('POST');
    params.body = JSON.stringify(body);
    return params;
};

export const buildPutParams = body => {
    let params = buildParams('PUT');
    params.body = JSON.stringify(body);
    return params;
};

export const handleErrors = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        if (response.status === 404 || response.status === 401) {
            return Promise.reject({ status: response.status });
        }
        return response.json().then(result => {
            return Promise.reject(result);
        });
    }
};

const buildParams = method => ({
    method: method,
});
