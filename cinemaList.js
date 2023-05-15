

// create array store logo of brands
'use strict';

let betaBrands = ['https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png'];

let bhdBrands = new Array(6);
let bhdLength = bhdBrands.length;
bhdBrands.fill('https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png');

let cgvBrands = new Array(22);
cgvBrands.fill('https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg');

let cineStarBrands = ['https://static.mservice.io/blogscontents/momo-upload-api-210604170530-637584231309495829.png', 'https://static.mservice.io/blogscontents/momo-upload-api-210604170530-637584231309495829.png'];

let dcineBrands = ['https://img.mservice.io/momo_app_v2/new_version/img/THAO.MAI/DcineLogo.png'];

let galaxyBrands = new Array(9);
galaxyBrands.fill('https://static.mservice.io/cinema/momo-upload-api-211123095138-637732578984425272.png');

let lotteBrands = new Array(10);
lotteBrands.fill('https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png');

let megaBrands = ['https://static.mservice.io/blogscontents/momo-upload-api-210604170511-637584231119272266.png', 'https://static.mservice.io/blogscontents/momo-upload-api-210604170511-637584231119272266.png'];

let betaNames = ['Beta Quang Trung'];

let brandLogos = [...betaBrands, ...bhdBrands, ...cgvBrands, ...cineStarBrands, ...dcineBrands, ...galaxyBrands, ...lotteBrands, ...megaBrands];

let bhdNames = ['BHD Star 3 tháng 2', 'BHD Star Bitexco', 'BHD Star Lê Văn Việt', 'BHD Star Phạm Hùng', 'BHD Star Quang Trung', 'BHD Star Thảo Điền'];

let cgvNames = ['CGV Aeon Bình Tân', 'CGV Aeon Tân Phú', 'CGV Crescent Mall', 'CGV Giga Mall Thủ Đức', 'CGV Hoàng Văn Thụ', 'CGV Hùng Vương Plaza', 'CGV IMC Trần Quang Khải', 'CGV Liberty Citypoint', 'CGV Lý Chính Thắng', 'CGV Pandora City', 'CGV Parkson Đồng Khởi', 'CGV Pearl Plaza', 'CGV Saigonres Nguyễn Xí', 'CGV Satra Củ Chi', 'CGV Sư Vạn Hạnh', 'CGV Thảo Điền Pearl', 'CGV Trường Sơn', 'CGV Vincom Center Landmark 81', 'CGV Vincom Đồng Khởi', 'CGV Vincom Gò Vấp', 'CGV Vincom Thủ Đức', 'CGV Vivo City'];

let cineStarNames = ['CineStar Hai Bà Trưng', 'CineStar Quốc Thanh'];

let dcineNames = ['Dcine Bến Thành'];

let galaxyNames = ['Galaxy Huỳnh Tấn Phát', 'Galaxy Kinh Dương Vương', 'Galaxy Linh Trung', 'Galaxy Nguyễn Du', 'Galaxy Nguyễn Văn Quá', 'Galaxy Phạm Văn Chí', 'Galaxy Quang Trung', 'Galaxy Tân Bình', 'Galaxy Trung Chánh'];

let lotteNames = ['Lotte Cantavil', 'Lotte Cộng Hoà', 'Lotte Gò Vấp', 'Lotte Gold View', 'Lotte Moonlight', 'Lotte Nam Sài Gòn', 'Lotte Nowzone', 'Lotte Phú Thọ', 'Lotte Thủ Đức', 'Lotte Ung Văn Khiêm'];

let megaNames = ['Mega GS Cao Thắng', 'Mega GS Lý Chính Thắng'];

let brandNames = [...betaNames, ...bhdNames, ...cgvNames, ...cineStarNames, ...dcineNames, ...galaxyNames, ...lotteNames, ...megaNames];
let brandNamesLength = brandNames.length;
let listBrands = document.querySelector('.main-left-list-cinema-name');
document.querySelector('.movie-border-bottom-main-left').style = `height:{heightOfBrandName}px`;


// create Li element of brand cinema 
for (let i = 0; i < brandNamesLength; i++) {
    let listElements = document.createElement('li');
    listElements.setAttribute('class', 'list-brand');
    // let logo = document.createElement('img');
    // logo.setAttribute('src', brandLogos[i]);
    // logo.style.minWidth = '36px';
    // logo.style.minHeight = '36px';

    listElements.insertAdjacentHTML('beforeend', `<img src="${brandLogos[i]}" />`);

    // listElements.appendChild(logo);
    let name = document.createElement('span');
    name.className = 'brand-name';
    name.innerHTML = brandNames[i];
    listElements.appendChild(name);
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-angle-right')
    listElements.appendChild(icon);
    listBrands.appendChild(listElements);
};

let lists = document.querySelectorAll('.list-brand');

const height = lists[0].clientHeight;

const heightOfUl = Number(height * 7);
let heightLast = lists[0].clientHeight * 4;
let heightChange = heightOfUl;
listBrands.style = `height:${heightOfUl + 6}px`;

let showMoreButton = document.querySelector('.main-left-list-cinema-show-more');
let parentOfButton = document.querySelector('.main-left-list-cinema-button');

let changeHeight = () => {
    if (heightChange <= 2540) {
        heightChange += (heightOfUl + 8);
        listBrands.style = `height:${heightChange}px`;
    } else {
        heightChange = height * brandNamesLength;
        listBrands.style = `height:${heightChange}px`;
        parentOfButton.style.display = 'none';
    }
}

showMoreButton.addEventListener('click', () => {
    changeHeight();
});

// search cinema

let searchInputs = document.querySelector('.main-left-search-input');

let searchElement = (element, inputValue, index, name) => {
    if (!element[index].toLowerCase().includes(inputValue.toLocaleLowerCase())) {
        name[index].style.display = 'none';
        showMoreButton.style.display = 'none';
    } else {
        name[index].style.display = 'flex';
        showMoreButton.style.display = 'inline';
    }
};

searchInputs.addEventListener('input', () => {
    let inputValue = searchInputs.value;
    for (let i = 0; i < brandNamesLength; i++) {
        searchElement(brandNames, inputValue, i, lists)
    }
});

let provideListWrapper = document.querySelector('.list-provide-wrapper');

// fetch list of provide from sources
fetch('https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/tree.json')
    .then(function (names) {
        return names.json();
    })
    .then(function (provides) {
        let provideLists = Object.values(provides);
        let names = [];
        provideLists.map((e) => {
            names.push(e.name);
        });

        names.forEach((name) => {
            let liElements = document.createElement('li');
            liElements.className = 'list-provide-items';
            liElements.innerHTML = name;
            provideListWrapper.appendChild(liElements);
        });

        let provideNames = document.querySelectorAll('.list-provide-items');
        Array.from(provideNames).forEach((provideName) => {
            provideName.addEventListener('click', () => {
                Array.from(provideNames).forEach((item) => {
                    item.className = item.className.replace(' active', '');
                });
                provideName.className += ' active';
            })
        });

        let provideInput = document.querySelector('.provide-parent-search-input input');
        let namesLength = names.length;
        provideInput.addEventListener('input', () => {
            let inputText = provideInput.value;
            for (let i = 0; i < namesLength; i++) {
                searchElement(names, inputText, i, provideNames);
            }
        })
    })
    .catch(function (error) {
        console.log(error);
    });

let popupOfProvide = document.querySelector('.popup-fixed-provide');

document.querySelector('.movie-border-top-location-option').addEventListener('click', () => {
    popupOfProvide.style.cssText = `
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: block; 
        background-color: rgba(0,0,0, 0.5);
    `;
    document.body.className = 'stop-scrolling'

});

let closePopup = (popupElement) => {
    popupElement.style.display = 'none';
    document.body.classList.remove('stop-scrolling');
};

document.querySelector('.popup-fixed-provide-footer-button').addEventListener('click', () => {
    closePopup(popupOfProvide);
});

document.querySelector('.popup-fixed-provide-head i').addEventListener('click', () => {
    closePopup(popupOfProvide);
});

// selectedId = 'lvv'
// let filmList = [
//     {
//         placeId: 'lvv',
//         films: [
//             {
//             id: '1',
//             name: '???'
//         },
//         {
//             id: '2',
//             name: '???'
//         }
//         ]
//     }
// ]

// filmList.filter(film =>  )

// Date Javascript

let filmList = [
    {
        placeId: 'betaquangtrung',
        namePlace: betaNames,
        logo: betaBrands,
        address: 'Số 645 Quang Trung, Phường 11, Quận Gò Vấp, Thành phố Hồ Chí Minh',
        films: [
            {
                id: '4',
                name: 'Tri Kỷ',
                banner: 'https://img.cdn.vncdn.io/cinema/img/3523323972506924-conmemay.jpg',
                time: ['10:25 ~ 12:55', '21:15 ~ 23:45'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            },
            {
                id: '5',
                name: 'Biệt Đội Rất Ổn',
                banner: 'https://img.cdn.vncdn.io/cinema/img/4183373847735027-1.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            }
        ]
    },
    {
        placeId: '3thang2',
        namePlaceId: bhdNames[0],
        logo: bhdBrands[0],
        address: 'Tầng 5 | Vincom Plaza, số 3C đường 3 Tháng 2, phường 11, quận 10, thành phố Hồ Chí Minh',
        films: [
            {
                id: '6',
                name: 'Biệt Đội Rất Ổn',
                banner: 'https://img.cdn.vncdn.io/cinema/img/4183373847735027-1.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            },
            {
                id: '7',
                name: 'Những Đứa Trẻ Trong Sương',
                banner: 'https://img.cdn.vncdn.io/cinema/img/4386653747201863-cPE4onInKRxaj3quzprFnSF2bGB.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            }
        ]
    },
    {
        placeId: 'bitexco',
        namePlaceId: bhdNames[0],
        logo: bhdBrands[0],
        address: 'Tầng 3 & 4 | Tòa nhà tài chính Bitexco, số 2 đường Hải Triều, phường Bến Nghé, quận 1, thành phố Hồ Chí Minh',
        films: []
    },
    {
        placeId: 'levanviet',
        namePlace: bhdBrands[2],
        logo: bhdBrands[0],
        address: 'Tầng 4 | Vincom Plaza Lê Văn Việt, số 50 đường Lê Văn Việt, Quận 9, thành phố Hồ Chí Minh',
        films: [
            {
                id: '1',
                name: 'Siêu Lừa Gặp Siêu Lầy',
                banner: 'https://img.cdn.vncdn.io/cinema/img/90579154820471367-HO01WswBGMg0B3quND3mYZxNHN.jpg',
                time: ['13:10 ~ 15:02', '14:40 ~ 16:32', '18:40 ~ 20:32'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            },
            {
                id: '2',
                name: 'Thanh Gươm Diệt Quỷ: Đường Đến Làng Rèn Gươm',
                banner: 'https://img.cdn.vncdn.io/cinema/img/2995715139969098-conmemay.jpg',
                time: ['11:10 ~ 13:00', '12:40 ~ 14:30', '16:40 ~ 18:30'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            },
            {
                id: '3',
                name: 'Tri Kỷ',
                banner: 'https://img.cdn.vncdn.io/cinema/img/3523323972506924-conmemay.jpg',
                time: ['10:25 ~ 12:55', '12:30 ~ 15:00', '16:45 ~ 19:15', '19:00 ~ 21:30', '21:15 ~ 23:45'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            }
        ]
    },
    {
        placeId: 'phamhung',
        namePlaceId: bhdNames[0],
        logo: bhdBrands[0],
        address: 'Tầng 4 | Trung tâm thương mại Satra Phạm Hùng, số C6/27 đường Phạm Hùng, huyện Bình Chánh, TP. Hồ Chí Minh',
        films: [
            {
                id: '1',
                name: 'Siêu Lừa Gặp Siêu Lầy',
                banner: 'https://img.cdn.vncdn.io/cinema/img/90579154820471367-HO01WswBGMg0B3quND3mYZxNHN.jpg',
                time: ['13:10 ~ 15:02', '14:40 ~ 16:32', '18:40 ~ 20:32'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            },
            {
                id: '5',
                name: 'Biệt Đội Rất Ổn',
                banner: 'https://img.cdn.vncdn.io/cinema/img/4183373847735027-1.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            }
        ]
    },
    {
        placeId: 'quangtrung',
        namePlaceId: bhdNames[0],
        logo: bhdBrands[0],
        address: 'Tầng B1 & B2 | Vincom Plaza Quang Trung, số 190 đường Quang Trung, quận Gò Vấp, thành phố Hồ Chí Minh',
        films: [
            {
                id: '1',
                name: 'Siêu Lừa Gặp Siêu Lầy',
                banner: 'https://img.cdn.vncdn.io/cinema/img/90579154820471367-HO01WswBGMg0B3quND3mYZxNHN.jpg',
                time: ['13:10 ~ 15:02', '14:40 ~ 16:32', '18:40 ~ 20:32'],
                age: '17+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            },
            {
                id: '9',
                name: 'Tri Âm: Người Giữ Thời Gian',
                banner: 'https://img.cdn.vncdn.io/cinema/img/4185404600682737-1.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30'],
                age: '18+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            },
            {
                id: '10',
                name: 'Sống Sót',
                banner: 'https://img.cdn.vncdn.io/cinema/img/5246938309984726-cTiWR6UZa6kn5fxSAhTvWbjSFYf.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30'],
                age: '16+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            },
            {
                id: '10',
                name: 'Sống Sót',
                banner: 'https://img.cdn.vncdn.io/cinema/img/5246938309984726-cTiWR6UZa6kn5fxSAhTvWbjSFYf.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30'],
                age: '16+',
                category: 'Hài,Kinh Dị,Hành Động',
                note: '2D Phụ đề'
            }
        ]
    },
    {
        placeId: 'thaodien',
        namePlaceId: bhdNames[0],
        logo: bhdBrands[0],
        address: 'Tầng 5 | Vincom Mega Mall Thảo Điền, số 159 đường Xa Lộ Hà Nội, Quận 2, thành phố Hồ Chí Minh',
        films: []
    }
]

let divElement = document.querySelector('.movie-border-bottom-main-right-wrapper');

let movieRight = document.querySelector('.movie-border-top-main-right-bottom-film');


// assign key for items in array brandName;

function appendNameCinema() {
    const text = 'Lịch chiếu phim';
    function nameBrand(cinemaName) {
        return `${text} ${cinemaName}`;
    };
    return nameBrand;
}

let titleCalendarFilm = appendNameCinema();

let selectCinema = (i) => {         /* function select list film of cinema */

    let nameCinema = brandNames[i];
    let addressCinema = filmList[i].address; //assign nameBrand, address corresponding key

    let currentTime = new Date();
    let weekDay = [currentTime.getDay()];
    let day = [currentTime.getDate()];
    for (let i = 0; i < 6; i++) {
        currentTime.setDate(currentTime.getDate() + 1)
        day.push(currentTime.getDate());
        weekDay.push(currentTime.getDay());
    };

    let dayOfWeek = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

    let html = `        
        <div class="movie-border-top-main-right-top">
            <div class="movie-border-top-main-right">
                <div class="movie-border-top-main-right-top-logo"> 
                    <img src="${filmList[i].logo}" alt="">
                </div>
                <div class="movie-border-top-main-right-map">
                    <div class="movie-border-top-main-right-top-name">${titleCalendarFilm(nameCinema)}</div>
                    <div class='movie-border-top-main-right-address'>
                        <span>${addressCinema}</span>
                        <span>[ Bản đồ ]</span>
                    </div>
                </div>
            </div>
            <div class="movie-border-top-main-boxday">
                <div class="movie-border-top-main-boxday-items">
                    <div class="movie-border-top-main-boxday-items-weekday">
                        <span class='date-item'>${day[0]}</span>
                    </div>
                    <div class="movie-border-top-main-boxday-items-day">
                        <span class='day-item'>${dayOfWeek[weekDay[0]]}</span>
                    </div>
                </div>
                <div class="movie-border-top-main-boxday-items">
                    <div class="movie-border-top-main-boxday-items-weekday">
                        <span class='date-item'>${day[1]}</span>
                    </div>
                    <div class="movie-border-top-main-boxday-items-day">
                        <span class='day-item'>${dayOfWeek[weekDay[1]]}</span>
                    </div>
                </div>
                <div class="movie-border-top-main-boxday-items">
                    <div class="movie-border-top-main-boxday-items-weekday">
                        <span class='date-item'>${day[2]}</span>
                    </div>
                    <div class="movie-border-top-main-boxday-items-day">
                        <span class='day-item'>${dayOfWeek[weekDay[2]]}</span>
                    </div>
                </div>
                <div class="movie-border-top-main-boxday-items">
                    <div class="movie-border-top-main-boxday-items-weekday">
                        <span class='date-item'>${day[3]}</span>
                    </div>
                    <div class="movie-border-top-main-boxday-items-day">
                        <span class='day-item'>${dayOfWeek[weekDay[3]]}</span>
                    </div>
                </div>
                <div class="movie-border-top-main-boxday-items">
                    <div class="movie-border-top-main-boxday-items-weekday">
                        <span class='date-item'>${day[4]}</span>
                    </div>
                    <div class="movie-border-top-main-boxday-items-day">
                        <span class='day-item'>${dayOfWeek[weekDay[4]]}</span>
                    </div>
                </div>
                <div class="movie-border-top-main-boxday-items">
                    <div class="movie-border-top-main-boxday-items-weekday">
                        <span class='date-item'>${day[5]}</span>
                    </div>
                    <div class="movie-border-top-main-boxday-items-day">
                        <span class='day-item'>${dayOfWeek[weekDay[5]]}</span>
                    </div>
                </div>
                <div class="movie-border-top-main-boxday-items">
                    <div class="movie-border-top-main-boxday-items-weekday">
                        <span class='date-item'>${day[6]}</span>
                    </div>
                    <div class="movie-border-top-main-boxday-items-day">
                        <span class='day-item'>${dayOfWeek[weekDay[6]]}</span>
                    </div>
                </div>
            </div>
        </div>
    `



    divElement.innerHTML = html;

    let listLength = filmList[i].films.length;

    let filmListBottoms = document.createElement('div');
    filmListBottoms.className = 'movie-border-top-main-right-bottom';
    // create element parent wrapper elements child


    if (listLength > 0) {
        for (let index = 0; index < listLength; index++) {

            let newDivElementChild1s = document.createElement('div');
            newDivElementChild1s.className = 'list-item-film';
            // create div item with each film

            let listItemFilmChild2s = document.createElement('div');
            listItemFilmChild2s.className = 'image-film-list'
            let imageFilms = document.createElement('img');
            imageFilms.setAttribute('src', filmList[i].films[index].banner)
            listItemFilmChild2s.appendChild(imageFilms);
            // create div of image

            let divElementFilmShowChild2s = document.createElement('div');
            divElementFilmShowChild2s.className = 'list-film-item-show';
            // create div element wrapper content of film

            let showContentTopElementChild3s = document.createElement('div');
            showContentTopElementChild3s.className = 'list-film-item-show-content-top';

            let boxAgeElementChild4s = document.createElement('div');
            boxAgeElementChild4s.className = 'list-film-item-content-age';
            boxAgeElementChild4s.innerHTML = filmList[i].films[index].age;

            let nameElementChild4s = document.createElement('div');
            nameElementChild4s.className = 'list-film-item-content-name';
            nameElementChild4s.innerHTML = filmList[i].films[index].name;

            let categoryElementChild4s = document.createElement('div');
            categoryElementChild4s.className = 'list-film-item-content-category';
            categoryElementChild4s.innerHTML = filmList[i].films[index].category;

            let showContentBottomElementChild3s = document.createElement('div');
            showContentBottomElementChild3s.className = 'list-film-item-content-bottom';

            let noteElementChild4s = document.createElement('div');
            noteElementChild4s.className = 'list-film-item-content-note';
            noteElementChild4s.innerHTML = filmList[i].films[index].note;

            let timeElementChild4s = document.createElement('div');
            timeElementChild4s.className = 'list-film-item-content-time';
            let timeofFilmLength = filmList[i].films[index].time.length;

            for (let x = 0; x < timeofFilmLength; x++) {
                let timeItems = document.createElement('span');
                timeItems.innerHTML = filmList[i].films[index].time[x];
                timeElementChild4s.appendChild(timeItems);
            }

            showContentTopElementChild3s.appendChild(boxAgeElementChild4s);
            showContentTopElementChild3s.appendChild(nameElementChild4s);
            showContentTopElementChild3s.appendChild(categoryElementChild4s);
            showContentBottomElementChild3s.appendChild(noteElementChild4s);
            showContentBottomElementChild3s.appendChild(timeElementChild4s);

            divElementFilmShowChild2s.appendChild(showContentTopElementChild3s);
            divElementFilmShowChild2s.appendChild(showContentBottomElementChild3s);
            newDivElementChild1s.appendChild(listItemFilmChild2s);
            newDivElementChild1s.appendChild(divElementFilmShowChild2s);

            filmListBottoms.appendChild(newDivElementChild1s);
            divElement.appendChild(filmListBottoms);
        }
    } else {
        let emptyElement = document.createElement('div');
        emptyElement.className = 'list-film-empty';

        let imageEmpty = document.createElement('img');
        imageEmpty.setAttribute('src', 'https://static.mservice.io/next-js/_next/static/public/cinema/not-found.svg');

        let textEmptyBold = document.createElement('p');
        textEmptyBold.innerHTML = 'Úi, Suất chiếu không tìm thấy.';

        let textEmptySolid = document.createElement('p');
        textEmptySolid.innerHTML = 'Bạn hãy thử tìm ngày khác nhé';

        emptyElement.appendChild(imageEmpty);
        emptyElement.appendChild(textEmptyBold);
        emptyElement.appendChild(textEmptySolid);
        divElement.appendChild(emptyElement);
    }
}

selectCinema(0);  /* show list film of cinema Quang Trung */
lists[0].className += ' active';


for (let i = 0; i < 7; i++) {
    lists[i].name = filmList[i].placeId;
    if (lists[i].name === filmList[i].placeId) {
        lists[i].addEventListener('click', () => {  /* assign event when click cinema name*/
            Array.from(lists).forEach((element) => {
                element.className = element.className.replace(' active', ''); /* assign style for listsBrand*/
            })
            lists[i].className += ' active';

            selectCinema(i);
        })

    }
};


let boxDayElements = document.querySelectorAll('.movie-border-top-main-boxday-items');
let boxDayDates = document.querySelectorAll('.movie-border-top-main-boxday-items-weekday .date-item');
let boxDayDateBorders = document.querySelectorAll('.movie-border-top-main-boxday-items-weekday');
let boxDayDays = document.querySelectorAll('.movie-border-top-main-boxday-items-day .day-item');

Array.from(boxDayElements).forEach((box, index) => {       /* assign event when click boxDay */
    box.addEventListener('click', () => {
        Array.from(boxDayElements).forEach((element) => {
        })
        box.className += ' actives';
        boxDayDates[index].className += ' addWhite';
        boxDayDateBorders[index].className += ' addBgColor';
        boxDayDays[index].className += ' addPink';
        console.log('hi')
    })
});




