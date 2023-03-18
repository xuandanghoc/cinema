let listElements = document.createElement('li');
listElements.setAttribute('class', 'list-brand');
let listBrands = document.querySelector('.main-left-list-cinema-name');
listBrands.appendChild(listElements);

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

let megaBrand = {
    name: 'lotte',
    logo: 'image'
}

// let betaBrands = {
//     name: 'Beta Quang Trung',
//     logo: 'https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png'
// };
