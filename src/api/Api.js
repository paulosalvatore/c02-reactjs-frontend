export const Api = {
    // Base URL
    baseUrl: "http://localhost:3001",

    // Endpoints
    readAllUrl: () => Api.baseUrl + "/personagem",

    // Funções de Requisição

    // GET
    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),
};
