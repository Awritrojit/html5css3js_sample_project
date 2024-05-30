document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById('searchBar');
    const movies = document.querySelectorAll('.movie');

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        movies.forEach(movie => {
            const movieTitle = movie.querySelector('h2').textContent.toLowerCase();
            if (movieTitle.includes(searchString)) {
                movie.style.display = '';
            } else {
                movie.style.display = 'none';
            }
        });
    });
});
