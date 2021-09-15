export const Api = {
    // Base URL
    baseUrl: "http://localhost:3001",

    // Endpoints

    // Personagem

    readAllUrl: () => Api.baseUrl + "/personagem",
    readByIdUrl: id => Api.baseUrl + "/personagem/" + id,

    createUrl: () => Api.baseUrl + "/personagem",

    // Login

    loginUrl: () => Api.baseUrl + "/login",

    // Localização

    readAllLocalizacaoUrl: () => Api.baseUrl + "/localizacao",

    // Funções de Requisição

    // GET
    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),

    // POST
    buildApiPostRequest: (url, body) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),
};
