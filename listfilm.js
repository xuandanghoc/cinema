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
    if (widthListChange <= widthOnScreen) {
        movieWrapper.style = `transform:translateX(${0}px)`;
        previousElementCurrent.style.display = 'none';
        widthListChange = 0;
        
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

let widthChange = 0;

let previousSlideMovie = () => {
    nextElementComing.style.display = 'block';
    let width = movieComingItems[0].offsetWidth;
    const widthOfWrapper = width * 5 + 19.2 * 5;
    const widthOnLast = width * 4 + 19.2 * 4;
    if (widthChange <= widthOfWrapper) {
        movieComingWrapper.style = `transform:translateX(${0}px)`;
        previousElementComing.style.display = 'none';
        widthChange = 0;
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
});

let nextSlideMovie = () => {
    let width = movieComingItems[0].offsetWidth;
    const widthOfWrapper = width * 5 + 19.2 * 5;
    const widthOnLast = width * 4 + 19.2 * 4;
    previousElementComing.style.display = 'block';
    if (widthChange < widthOfWrapper * 2) {
        widthChange += widthOfWrapper;
        movieComingWrapper.style = `transform:translateX(${widthChange * (-1)}px)`;
    } else {
        widthChange += widthOnLast; 
        movieComingWrapper.style = `transform:translateX(${widthChange * (-1)}px)`;
        nextElementComing.style.display = 'none';

    }
};

nextElementComing.addEventListener('click', () => {
    nextSlideMovie();
});

// trailer movie
let nextElementTrailer = document.querySelector('.trailer-movie-next i');
let previousElementTrailer = document.querySelector('.trailer-movie-previous i');
let trailerElementWrapper = document.querySelector('.trailer-movie-flex-wrapper');
let trailerItems = document.getElementsByClassName('trailer-movie-flex-items');

let widthChangeOfTrailer = 0;
let nextSlideTrailer = () => {
    previousElementTrailer.style.display = 'block'
    let width = trailerItems[0].offsetWidth;
    const widthOfWrapper = width * 4 + 19.2 * 4;
    const widthOnLast = width * 3 + 19.2 * 3;
    if (widthChangeOfTrailer < widthOfWrapper * 4) {
        widthChangeOfTrailer += widthOfWrapper;
        trailerElementWrapper.style = `transform:translateX(${widthChangeOfTrailer * (-1)}px)`;
    } else {
        widthChangeOfTrailer += widthOnLast; 
        trailerElementWrapper.style = `transform:translateX(${widthChangeOfTrailer * (-1)}px)`;
        nextElementTrailer.style.display = 'none';
    }
};
nextElementTrailer.addEventListener('click', () => {
    nextSlideTrailer();
});

let previousSlideTrailer = () => {
    nextElementTrailer.style.display = 'block'
    let width = trailerItems[0].offsetWidth;
    const widthOfWrapper = width * 4 + 19.2 * 4;
    const widthOnLast = width * 3 + 19.2 * 3;
    if (widthChangeOfTrailer <= widthOfWrapper) {
        trailerElementWrapper.style = `transform:translateX(${0}px)`;
        previousElementTrailer.style.display = 'none';
        widthChangeOfTrailer = 0;
    } else if (widthChangeOfTrailer > widthOfWrapper && widthChangeOfTrailer <= widthOfWrapper * 4) {
        widthChangeOfTrailer -=  widthOfWrapper;
        trailerElementWrapper.style = `transform:translateX(${widthChangeOfTrailer * (-1)}px)`;
    } else {
        widthChangeOfTrailer -= widthOnLast; 
        trailerElementWrapper.style = `transform:translateX(${widthChangeOfTrailer * (-1)}px)`;
    }
}

previousElementTrailer.addEventListener('click', () => {
    previousSlideTrailer();
});





