export const Api = {
    // Base URL
    baseUrl: "http://localhost:3001",

    // Endpoints
    readAllUrl: () => Api.baseUrl + "/personagem",
    readByIdUrl: id => Api.baseUrl + "/personagem/" + id,

    // Funções de Requisição

    // GET
    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),
};
