async function displayMovies(url) {
    const movies = await getMovies(url);
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        console.log(movie);
        const movieEL = document.createElement('div');
        movieEL.classList.add('movie');
        movieEL.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" >
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Descrição</h3>
                ${overview}
            </div>
        `;
        main.appendChild(movieEL);
    });
}
