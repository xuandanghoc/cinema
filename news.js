
let news = [
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230519080056-638200800568482950.jpg',
        content:'VieON giảm 10% cho bạn mới thả ga xem phim giải trí chất lượng cao',
        day: '19/05/2023'
    },
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230519175236-638201155566113044.jpg',
        content: 'Xem phim hay, lời ngay deal xịn: Giảm 10.000Đ khi đặt vé xem phim và nhập mã “CHAOHE23” trên website MoMo',
        day: '17/05/2023'
    },
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230505120701-638188852212959998.jpg',
        content: 'Ưu đãi CGV phủ phê chỉ từ 59K cho tín đồ mê phim!',
        day: '19/05/2023'
    },
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230427163057-638182098571815038.jpg',
        content: 'Mê rạp Lotte, MoMo giảm ngay 5K chiêu đãi mọt phim!',
        day: '17/05/2023'
    }, 
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230403093820-638161115007657682.jpg',
        content: 'Beta Cinema ưu đãi khủng chỉ từ 58.000Đ/vé, MoMo mua liền!',
        day: '19/05/2023'
    },
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230329101133-638156814939251831.jpg',
        content: 'Deal lễ lớn: Mua vé xem phim, rinh quà du lịch 300.000Đ vi vu xả láng!',
        day: '17/05/2023'
    }, 
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230324144446-638152658866967300.jpg',
        content: 'Fan xi nê thì chớ bỏ qua ưu đãi cực mê: Giảm 10.000Đ cho hóa đơn mua vé xem phim từ 150.000Đ trên MoMo',
        day: '19/05/2023'
    },
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230317133402-638146568423589201.jpg',
        content: 'Độc quyền trên MoMo, săn vé CGV chỉ từ 59K!',
        day: '17/05/2023'
    },
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230519080056-638200800568482950.jpg',
        content:'VieON giảm 10% cho bạn mới thả ga xem phim giải trí chất lượng cao',
        day: '19/05/2023'
    },
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230519175236-638201155566113044.jpg',
        content: 'Xem phim hay, lời ngay deal xịn: Giảm 10.000Đ khi đặt vé xem phim và nhập mã “CHAOHE23” trên website MoMo',
        day: '17/05/2023'
    },
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230505120701-638188852212959998.jpg',
        content: 'Ưu đãi CGV phủ phê chỉ từ 59K cho tín đồ mê phim!',
        day: '19/05/2023'
    },
    {
        image: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230427163057-638182098571815038.jpg',
        content: 'Mê rạp Lotte, MoMo giảm ngay 5K chiêu đãi mọt phim!',
        day: '17/05/2023'
    }
]


let newsWrapper = document.querySelector('.news-cinema-list');
let newsLength = news.length;
for (let i = 0; i < newsLength; i++) {
    let newsDivs = document.createElement('div');
    newsDivs.className = 'news-cinema-list-item';
    let newsHtml = `
    <div class="news-list-item-image">
        <img src="${news[i].image}" alt="This is a image">
    </div>
    <div class="news-list-item-inform">
        <div class="news-list-item-inform-text">${news[i].content}</div>
    </div>
    <div class="news-list-item-inform-day">${news[i].day}</div>
    `
    newsDivs.innerHTML = newsHtml;
    newsWrapper.appendChild(newsDivs);
}

