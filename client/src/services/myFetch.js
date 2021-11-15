import session from "./session";

const API_ROOT = process.env.APP_VUE_API_ROOT ?? 'http://localhost:3100/';

export async function api(url) {
    try {
        const x = await fetch(API_ROOT + url);
        if (!x.ok) {
            throw await x.json();
        }
        return await x.json();
    } catch (err) {
        session.Error(err);
    }
}

