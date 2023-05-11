
let cinemaAmount = document.querySelectorAll('.cinema-list-amount');

let informCinema = [
    {
        id: 1,
        name: 'CGV',
        logo: 'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
        title: 'Hệ thống rạp chiếu phim lớn nhất Việt Nam',
        rate: '1326  đánh giá',
        quantity: '88  rạp'
    }, 
    {
        id: 2,
        name: 'Lotte Cinema',
        logo: 'https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png',
        title: 'Hệ thống rạp chiếu phim từ Hàn Quốc',
        rate: '1326  đánh giá',
        quantity: '48  rạp'
    }, 
    {
        id: 3,
        name: 'Galaxy Cinema',
        logo: 'https://static.mservice.io/cinema/momo-upload-api-211123095138-637732578984425272.png',
        title: 'Mang Hollywood đến gần bạn',
        rate: '1326  đánh giá',
        quantity: '20 rạp'
    }, 
    {
        id: 4,
        name: 'BHD Star',
        logo: 'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
        title: 'Hệ thống rạp chiếu phim hiện đại',
        rate: '136  đánh giá',
        quantity: '11  rạp'
    }, 
    {
        id: 5,
        name: 'Beta Cinemas',
        logo: 'https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png',
        title: 'Rạp chiếu phim Beta Cinemas',
        rate: '132  đánh giá',
        quantity: '8  rạp'
    }, 
    {
        id: 6,
        name: 'Cinestar',
        logo: 'https://static.mservice.io/blogscontents/momo-upload-api-210604170530-637584231309495829.png',
        title: 'Hệ thống rạp chiếu phim giá rẻ, hiện đại bậc nhất',
        rate: '16  đánh giá',
        quantity: '88  rạp'
    }, 
    {
        id: 7,
        name: 'Mega GS',
        logo: 'https://static.mservice.io/blogscontents/momo-upload-api-210604170511-637584231119272266.png',
        title: 'HRạp chiếu phim tiêu chuẩn quốc tế tại Việt Nam',
        rate: '16  đánh giá',
        quantity: '88  rạp'
    }, 
    {
        id: 8,
        name: 'DCINE',
        logo: 'https://img.mservice.io/momo_app_v2/new_version/img/THAO.MAI/DcineLogo.png',
        title: 'Rạp chiếu phim DCINE',
        rate: '26  đánh giá',
        quantity: '2  rạp'
    }, 
    {
        id: 9,
        name: 'Cinemax',
        logo: 'https://static.mservice.io/cinema/momo-upload-api-221108100132-638034984925107129.png',
        title: 'Rạp phim đạt chuẩn quốc gia',
        rate: '13  đánh giá',
        quantity: '8  rạp'
    }, 
]

let cinemaListItems = document.querySelector('.cinema-list-amount');
let informCinemaLength = informCinema.length; 

for (let i = 0; i < informCinemaLength; i++) {
    let cinemaListsItemWrapper = document.createElement('div');
    cinemaListsItemWrapper.className = 'cinema-list-wrapper-item'
    let htmlCinema = `
            <div class="cinema-list-wrapper-item-logo">
                <img src="${informCinema[i].logo}" alt="">
            </div>
            <div class="cinema-list-wrapper-item-detail">
                <div class="item-detail-name">${informCinema[i].name}</div>
                <div class="item-detail-text">${informCinema[i].title}</div>
                <div class="item-detail-rate">
                    <span class="item-detail-rate-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="item-detail-rate-valuate">${informCinema[i].rate}</span>
                </div>
                <div class="item-detail-quantity">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${informCinema[i].quantity}</span>
                </div>            
            </div>
    `
    cinemaListsItemWrapper.innerHTML = htmlCinema;
    cinemaListItems.appendChild(cinemaListsItemWrapper);
}