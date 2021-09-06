export const Api = {
    // Base URL
    baseUrl: "https://pokeapi.co/api/v2",

    // Endpoints
    readAllUrl: () => Api.baseUrl + "/pokemon",

    // Funções de Requisição

    // GET
    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),
};
