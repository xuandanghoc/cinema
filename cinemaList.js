

// create array store logo of brands

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

lotteBrands = new Array(10);
lotteBrands.fill('https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png');

megaBrands = ['https://static.mservice.io/blogscontents/momo-upload-api-210604170511-637584231119272266.png', 'https://static.mservice.io/blogscontents/momo-upload-api-210604170511-637584231119272266.png'];

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
    let logo = document.createElement('img');
    logo.setAttribute('src', brandLogos[i]);
    listElements.appendChild(logo);
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
let heightLast = height * 4;
let heightChange = heightOfUl;  
listBrands.style = `height:${heightOfUl}px`;

let showMoreButton = document.querySelector('.main-left-list-cinema-show-more');
let parentOfButton = document.querySelector('.main-left-list-cinema-button');

let changeHeight = () => {
    if (heightChange <= 2540) {
        heightChange += heightOfUl;
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

let searchElement = (Element, inputValue, index, name) => {
    if (!Element[index].toLowerCase().includes(inputValue.toLocaleLowerCase())) {
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
});

let closePopup = (popupElement) => {
    popupElement.style.display = 'none';
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
        placeId: 'quangtrung',
        namePlace: betaNames,
        logo: betaBrands,
        address: 'Số 645 Quang Trung, Phường 11, Quận Gò Vấp, Thành phố Hồ Chí Minh',
        films: [
            {
                id: '4', 
                name: 'Tri Kỷ',
                banner: 'https://img.cdn.vncdn.io/cinema/img/3523323972506924-conmemay.jpg',
                time: ['10:25 ~ 12:55', '21:15 ~ 23:45']
            }, 
            {
                id: '5', 
                name: 'Biệt Đội Rất Ổn', 
                banner: 'https://img.cdn.vncdn.io/cinema/img/4183373847735027-1.jpg', 
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30']
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
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30']
            }, 
            {
                id: '7',
                name: 'Những Đứa Trẻ Trong Sương',
                banner: 'https://img.cdn.vncdn.io/cinema/img/4386653747201863-cPE4onInKRxaj3quzprFnSF2bGB.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30']
            }
        ]
    }, 
    {
        placeId: 'bitexco', 
        namePlaceId: bhdNames[0],
        logo: bhdBrands[0],
        address: 'Tầng 3 & 4 | Tòa nhà tài chính Bitexco, số 2 đường Hải Triều, phường Bến Nghé, quận 1, thành phố Hồ Chí Minh',
        films: [
            {
                id: '8',
                name: ''
            }
        ]
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
                time: ['13:10 ~ 15:02', '14:40 ~ 16:32', '18:40 ~ 20:32']
    }, 
            {
                id: '2',
                name: 'Thanh Gươm Diệt Quỷ: Đường Đến Làng Rèn Gươm',
                banner: 'https://img.cdn.vncdn.io/cinema/img/2995715139969098-conmemay.jpg',
                time: ['11:10 ~ 13:00', '12:40 ~ 14:30', '16:40 ~ 18:30']
    },  
            {
                id: '3',
                name: 'Tri Kỷ',
                banner: 'https://img.cdn.vncdn.io/cinema/img/3523323972506924-conmemay.jpg',
                time: ['10:25 ~ 12:55', '12:30 ~ 15:00', '16:45 ~ 19:15', '19:00 ~ 21:30', '21:15 ~ 23:45']
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
                time: ['13:10 ~ 15:02', '14:40 ~ 16:32', '18:40 ~ 20:32']
            }, 
            {
                id: '5', 
                name: 'Biệt Đội Rất Ổn', 
                banner: 'https://img.cdn.vncdn.io/cinema/img/4183373847735027-1.jpg', 
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30']
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
                time: ['13:10 ~ 15:02', '14:40 ~ 16:32', '18:40 ~ 20:32']
            }, 
            {
                id: '9',
                name: 'Tri Âm: Người Giữ Thời Gian', 
                banner: 'https://img.cdn.vncdn.io/cinema/img/4185404600682737-1.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30']
            },
            {
                id: '10',
                name: 'Sống Sót', 
                banner: 'https://img.cdn.vncdn.io/cinema/img/5246938309984726-cTiWR6UZa6kn5fxSAhTvWbjSFYf.jpg',
                time: ['22:30 ~ 00:21', '23:00 ~ 00:51', '23:30 ~ 01:30']
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
for (let  i = 0; i < 7; i++) {
    lists[i].name = filmList[i].placeId;
    if (lists[i].name === filmList[i].placeId) {
        lists[i].addEventListener('click', () => {
            nameCinema = brandNames[i];
            addressCinema = filmList[i].address; //assign nameBrand, address corresponding key

            let divElementOfFilm = document.createElement('div');
            divElementOfFilm.className = 'cinema-list-film';
            
            let lists = filmList[i].films;
            let listLenght = lists.length;
            console.log(lists);
            // for (let index = 0; index < listLenght; index++) {
            //     let divElementFilm = document.createElement('div');
            //     divElementFilm.className = 'item-film';
            //     let htmlItemFilm = `
            //     <div class="list-film-item-logo">
            //     <img src="" alt="">
            //     </div>
            //     <div class="list-film-item-show">
            //         <div class="list-film-item-show-content">
            //             <div class="list-film-item-show-content-box"></div>
            //             <div class="list-film-item-show-content-name"></div>
            //             <div class="list-film-item-show-content-category"></div>
            //         </div>
            //         <div class="list-film-item-show-time">
            //             <div class="list-film-item-show-time-note"></div>
            //             <div class="list-film-item-show-time-grid">

            //             </div>
            //         </div>
            //     </div>
            //     `
            //     divElement.innerHTML = htmlItemFilm;
            // }
            let currentTime = new Date();
            let currentDay = currentTime.getDate();
            let currentWeekDay = currentTime.getDay();
            const options = { weekday: "long" };
            let weekDay = [new Intl.DateTimeFormat("en-US", options).format(currentWeekDay)];
            // let weekday = [currentWeekDay];
            let day = [currentDay];
            for (let i = 0; i < 6; i++) {
                currentDay++;
                currentWeekDay++;
                weekDay.push(new Intl.DateTimeFormat("en-US", options).format(currentWeekDay));
                day.push(currentDay);
            }
            let html = `
    <div class="movie-border-top-main-right-top">
        <div class="movie-border-top-main-right">
            <div class="movie-border-top-main-right-top-logo">
                <img src="${bhdBrands[0]}" alt="">
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
                    <span>${day[0]}</span>
                </div>
                <div class="movie-border-top-main-boxday-items-day">
                    <span>${currentTime.getDayName()}</span>
                </div>
            </div>
            <div class="movie-border-top-main-boxday-items">
                <div class="movie-border-top-main-boxday-items-weekday">
                    <span>${day[1]}</span>
                </div>
                <div class="movie-border-top-main-boxday-items-day">
                    <span>${weekDay[1]}</span>
                </div>
            </div>
            <div class="movie-border-top-main-boxday-items">
                <div class="movie-border-top-main-boxday-items-weekday">
                    <span>${day[2]}</span>
                </div>
                <div class="movie-border-top-main-boxday-items-day">
                    <span>${weekDay[2]}</span>
                </div>
            </div>
            <div class="movie-border-top-main-boxday-items">
                <div class="movie-border-top-main-boxday-items-weekday">
                    <span>${day[3]}</span>
                </div>
                <div class="movie-border-top-main-boxday-items-day">
                    <span>${weekDay[3]}</span>
                </div>
            </div>
            <div class="movie-border-top-main-boxday-items">
                <div class="movie-border-top-main-boxday-items-weekday">
                    <span>${day[4]}</span>
                </div>
                <div class="movie-border-top-main-boxday-items-day">
                    <span>${weekDay[4]}</span>
                </div>
            </div>
            <div class="movie-border-top-main-boxday-items">
                <div class="movie-border-top-main-boxday-items-weekday">
                    <span>${day[5]}</span>
                </div>
                <div class="movie-border-top-main-boxday-items-day">
                    <span>${weekDay[5]}</span>
                </div>
            </div>
            <div class="movie-border-top-main-boxday-items">
                <div class="movie-border-top-main-boxday-items-weekday">
                    <span>${day[6]}</span>
                </div>
                <div class="movie-border-top-main-boxday-items-day">
                    <span>${weekDay[6]}</span>
                </div>
            </div>
        </div>
    </div>
    <div>

    </div>
    `
    divElement.innerHTML = html;
        })
    }
};

function appendNameCinema() {
    const text = 'Lịch chiếu phim';
    function nameBrand(cinemaName) {
        return `${text} ${cinemaName}`;
    };
    return nameBrand;
}

let titleCalendarFilm = appendNameCinema();
// create html code

    let nameCinema, addressCinema;

    (function getDayOfWeek() {
        let dayOfWeek = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
        Date.prototype.getDayName = function() {
            return dayOfWeek[ this.getDay() ];
        };
    })();
    
    Array.from(filmList).filter((film, index) => {
        if (lists[index].name == film.placeId) {
           
        }
    })
    
