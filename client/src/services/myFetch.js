const API_ROOT = process.env.APP_VUE_API_ROOT ?? 'http://localhost:3100/';

export function api(url) {
    return fetch(API_ROOT + url).then(x=> x.json());
}

