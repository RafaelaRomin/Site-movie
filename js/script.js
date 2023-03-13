
function getClassByRate(vote_average) { 
    if (vote_average >= 8) {
        return 'green';
    } else if (vote_average >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}


form.addEventListener('submit', async (e) => {  
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        displayMovies(SEARCH_API + searchTerm); 
        search.value = ''; 
    } else {
        displayMovies(API_URL);
    }
});

displayMovies(API_URL);

