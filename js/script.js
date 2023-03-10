const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';
const main = document.getElementById('main'); // procura de documentos (document.getElementById) - const (variaveis)
const form = document.getElementById('form');
const search = document.getElementById ('search');

async function getMovies(url) { //função de busca de filmes
     try { //caso aconteça algum erro
        const res= await fetch(url); // buscar os dados da url - async e await = ter informações assíncronas (sempre utilizados juntos)
        const data = await res.json(); //pegar os dados da url - res - pegar dados do json 
        return data.results; //retorno de resultados de pesquisa
    } catch (error) {
        console.log(error);
    }
}

async function displayMovies (url) { 
    const movies = await getMovies(url);
    main.innerHTML = '' //colocar informação dentro do HTML
    movies.forEach((movie) => { //percorrer a lista completa
        const {title, poster_path, vote_average, overview} = movie;  //conteudos da API
        console.log(movie); 
        const movieEL = document.createElement ('div'); // criar elemento dentro do HTML
        movieEL.classList.add('movie'); //concatenação da url da imagem e inserindo no html
        movieEL.innerHTML = `
            <img src "${IMG_PATH + poster_path}" alt="${title}"> 
            <div class="movie-info" >
                <h3>${title}</h3>
                <span class=""></span>
            </div>
        `
    }); 
    function getClassByRate(vote_average);
}