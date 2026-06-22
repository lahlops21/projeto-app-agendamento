// Esse rquivo será responsável por planejar todas as requisições que o front-end irá fazer para a api


// async/await
export const API_URL = 'http://localhost:8080';

let tokenJwt = null;
const controller = new AbortController();// cancela a request se exceder o tempo limite

export default async function request({method, path, body}) {


    const api = {
        get: (path) => request(path, 'GET'),
        post: (path, body) => request(path, 'POST', body),
        put: (path, body) => request(path, 'PUT', body),
        delete: (path) => request(path, 'DELETE'),
    }
    return api;
}