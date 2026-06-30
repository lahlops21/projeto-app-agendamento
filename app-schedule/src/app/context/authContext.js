// Esse rquivo será responsável por planejar todas as requisições que o front-end irá fazer para a api

import { createContext, useState } from "react";


// async/await
export const API_URL = 'http://localhost:8080';

let tokenJwt = null;


const TIMEOUT_MS = 10_000; // 10 segundos de espera depois da requisição 

//Função para pegar o tokenJWT para ser usado nas próximas requisições 
export function setToken(token){
tokenJwt = token
}

// Função que limpa o token
export function clearToken(){
   tokenJwt = null 
}

const AuthContext = createContext(null);

export function AuthProvider({ children }){
    const[usuario, setUsuario] = useState(null)
}

export default async function request({method, path, body}) {
const controller = new AbortController();// cancela a request se exceder o tempo limite
const timer = setTimeout();
}