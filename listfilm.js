let nextElement = document.querySelector('.current-movie-next i');
let previousElement = document.querySelector('.current-movie-previous i');

let currentMovie = document.querySelector('.current-movie-flex');
let movieWrapper = document.querySelector('.current-movie-flex-wrapper');
let nextSlide = () => {
    previousElement.style.display = 'block';
    let movieWidth = (currentMovie.offsetWidth + 19.2) * (-1);
    movieWrapper.style = `transform:translateX(${movieWidth}px)`;
    
};
nextElement.addEventListener('click', () => {
    nextSlide();
});

let previous = () => {
    
}
