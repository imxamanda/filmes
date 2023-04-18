const { default: axios } = require("axios");

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjE2M2NhZjQ4NjNkODY5Y2ZjZjQ5ZGJjODM4MjA5NyIsInN1YiI6IjY0MzQ4ZTFhZWM0NTUyMDBiNTgxNDUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vT75flEFTAfzTZEtRhx5z12LBVHtmfFiD50zF6jzhxs'//chave dentro das aspas Token de Leitura da API (v4 auth)
    }
})

export default apiFilmes