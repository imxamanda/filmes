const { default: axios } = require("axios");

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer ' + process.env.API_KEY_TMDB   //chave dentro das aspas Token de Leitura da API (v4 auth)
    }
})

export default apiFilmes