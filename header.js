'use strict';
let listDrops = document.querySelectorAll('.lists-items-sub');
let angleDowns = document.querySelectorAll('.fa-angle-down');
let listItems = document.querySelectorAll('.header-nav-lists-items');

let showListNav = (index) => {
    if (listDrops[index].style.display == 'none') {
        Array.from(listDrops).forEach((listDrop) => {
            listDrop.style.display = 'none';
        });
        Array.from(angleDowns).forEach((angle) => {
            angle.className = angle.className.replace(' up', '');
        });
        listDrops[index].style.display = 'block';
        angleDowns[index].className += ' up';
    } else {
        listDrops[index].style.display = 'none';
        angleDowns[index].className = angleDowns[index].className.replace(' up', '');
    }
};

Array.from(listItems).forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        showListNav(index);
    })
});

let hideListNav = () => {
    Array.from(listDrops).forEach((listDrop) => {
        listDrop.style.display = 'none';
    });
    Array.from(angleDowns).forEach((angle) => {
        angle.className = angle.className.replace(' up', '');
    });
    // popupOfProvide.style.display = 'none';
};

window.addEventListener('click', () => {
    hideListNav();
});


// responsive

let changeIcon = (element) => {
    element .classList.toggle('change');
}

let navElement = document.querySelector('.header-nav-lists');
let menuElement = document.querySelector('.menu');

let showNavElement = (icon, nav) => {
    icon.classList.toggle('change');
    nav.classList.toggle('hidden')
}
menuElement.addEventListener('click', () => {
    showNavElement(menuElement, navElement);
})

