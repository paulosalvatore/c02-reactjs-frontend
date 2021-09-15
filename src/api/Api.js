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

    // Auth Header

    authHeader: {
        Authorization: "Bearer " + localStorage.getItem("JWT"),
    },

    // Funções de Requisição

    // GET
    buildApiGetRequest: (url, auth) =>
        fetch(url, {
            method: "GET",
            headers: auth ? new Headers({ ...Api.authHeader }) : undefined,
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
