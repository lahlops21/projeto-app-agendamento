import axios from "axios";

// Instância do axios para configurar a base URL e outras opções padrão
// Sempre é assim 
const api = axios.create({
    baseURL: "http://localhost:8080", // Endereço central da API
    timeout:8000, // Tempo máximo de espera para uma resposta (em milissegundos)
    headers: { 'Content-Type': 'application/json' }, // Cabeçalhos padrão para as requisições RN
})


// Propridade de interceptação para adicionar o token de autenticação em todas as requisições
//Login bem sucedido ou não efetuado
api.interceptors.request.use(config => { 
    //Exibe o método e a URL da requisição no console para depuração
    console.log(`[AXIOS] ${config.method?.toUpperCase()} ${config.url}`);
    // deve retornar a configuração da requisição para que ela prossiga
    return config;
});

// Login não efetuado 
api.interceptors.response.use(
    response => response, // Retorna a resposta se for bem-sucedida
    error => { 
        // Exibe o erro no console para depuração
        console.warn(`[AXIOS] Erro na requisição: `, error.response?.status, error.message);
        return Promise.reject(error); //Retorna uma Promise rejeitada com o erro para que possa ser tratado posteriormente 
    }
)

export default api; // Exporta a instância do axios para ser usada em outras partes da aplicação