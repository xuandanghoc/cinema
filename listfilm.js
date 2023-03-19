let nextElementCurrent = document.querySelector('.current-movie-next i');
let previousElementCurrent = document.querySelector('.current-movie-previous i');

let currentMovie = document.querySelector('.current-movie-flex');
let movieWrapper = document.querySelector('.current-movie-flex-wrapper');

let movieLists = document.getElementsByClassName('current-movie-flex-items');

let widthListChange = 0;
let nextSlide = () => {
    let widthOfItem = movieLists[0].offsetWidth;
    const widthOnScreen = widthOfItem * 5 + 19.2 * 5;
    const widthOnLastMovie = widthOfItem * 3 + 19.2 * 3;
    previousElementCurrent.style.display = 'block';
    if (widthListChange < widthOnScreen * 3) {
        widthListChange += widthOnScreen;
        movieWrapper.style = `transform:translateX(${widthListChange * (-1)}px)`;
    } else {
        widthListChange += widthOnLastMovie; 
        movieWrapper.style = `transform:translateX(${widthListChange * (-1)}px)`;
        nextElementCurrent.style.display = 'none';
    }
};
nextElementCurrent.addEventListener('click', () => {
    nextSlide();
});

let previousSlide = () => {
    let widthOfItem = movieLists[0].offsetWidth;
    const widthOnScreen = widthOfItem * 5 + 19.2 * 5;
    const widthOnLastMovie = widthOfItem * 3 + 19.2 * 3;
    nextElementCurrent.style.display = 'block';
    if (widthListChange > 0 && widthListChange <= widthOnScreen) {
        movieWrapper.style = `transform:translateX(${0}px)`;
        previousElementCurrent.style.display = 'none';
        
    } else if (widthListChange > widthOnScreen && widthListChange <= widthOnScreen * 3) {
        widthListChange -=  widthOnScreen;
        movieWrapper.style = `transform:translateX(${widthListChange * (-1)}px)`;
    } else {
        widthListChange -= widthOnLastMovie; 
        movieWrapper.style = `transform:translateX(${widthListChange * (-1)}px)`;
    }
    };

previousElementCurrent.addEventListener('click', () => {
    previousSlide();
})

// coming soon movie
let nextElementComing = document.querySelector('.comingsoon-movie-next i');
let previousElementComing = document.querySelector('.comingsoon-movie-previous i');
let movieComingWrapper = document.querySelector('.comingsoon-movie-flex-wrapper');
let movieComingItems = document.getElementsByClassName('comingsoon-movie-flex-items');
let width = movieComingItems[0].offsetWidth;
const widthOfWrapper = width * 5 + 19.2 * 5;
const widthOnLast = width * 4 + 19.2 * 4;
let widthChange = 0;

let nextSlideMovie = () => {
    previousElementComing.style.display = 'block';
    if (widthChange < widthOfWrapper * 2) {
        widthChange += widthOfWrapper;
        movieComingWrapper.style = `transform:translateX(${widthChange * (-1)}px)`;
    } else {
        console.log('hi');
        widthChange += widthOnLast; 
        movieComingWrapper.style = `transform:translateX(${widthChange * (-1)}px)`;
        nextElementComing.style.display = 'none';
    }
};
nextElementComing.addEventListener('click', () => {
    nextSlideMovie();
});

let previousSlideMovie = () => {
    nextElementComing.style.display = 'block';
    if (widthChange > 0 && widthChange <= widthOfWrapper) {
        movieComingWrapper.style = `transform:translateX(${0}px)`;
        previousElementComing.style.display = 'none';
        
    } else if (widthChange > widthOfWrapper && widthChange <= widthOfWrapper * 2) {
        widthChange -=  widthOfWrapper;
        movieComingWrapper.style = `transform:translateX(${widthChange * (-1)}px)`;
    } else {
        widthChange -= widthOnLast; 
        movieComingWrapper.style = `transform:translateX(${widthChange * (-1)}px)`;

    }
};
previousElementComing.addEventListener('click', () => {
    previousSlideMovie();
})

