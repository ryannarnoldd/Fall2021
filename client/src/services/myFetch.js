const API_ROOT = 'localhost:3100/';

export function api(url) {
    return fetch(API_ROOT + url).then(x=> x.json());
}

