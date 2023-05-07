

let dateComment = new Date();  /* declare day comment */

function getFormattedDate(date) {
    let year = date.getFullYear();    /* format date to dd/mm/yyyy string */
  
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return day + '/' + month + '/' + year;
  }

let commentFilms = [
    {
        id: 1,
        films: {
            name: 'Lật Mặt 6: Tấm Vé Định Mệnh',
            percent: '88%',
            amountComment: '4.2K',
            imageUrl: 'https://img.cdn.vncdn.io/cinema/img/4907747409891181-maxresdefault.jpg'
        },
        users: {
            fullName: ['Nguyễn Hoàng Thuận', 'Truong Nhat Huong Giang'],
            avt: ['https://img.mservice.com.vn/avatars/avatar/ce08/7bb646fa21211f27e9231268601df38b77ca8fff737b0a96fa5c6018c6d8.png', 'https://img.mservice.com.vn/avatars/avatar/73fa/23938cb66283a6595dd88c8f271b4da92fe2cc96c33d4b9b5508f9379cae.png'],
            date: getFormattedDate(dateComment),
            comment: ['Đó giờ vẫn đánh giá cao nỗ lực của anh Hải, nhưng thực sự phần 6 này tệ hơn những phần trước nhiều. Phim dở, diễn viên thì đơ, kịch bản thì thiếu logic, lồng tiếng lúc thì khớp lúc thì lệch. 2/3 sau của phim drama dồn dập, xem mà phát mệt. Twist chồng twist mà không có cái nào phát triển cho tới. Trung bình 5p nhân vật vô bệnh viện 1 lần 🙃. Thay vì đầu tư cho PR và seeding thì ekip nên đầu tư 1 biên kịch mới!', 'Diễn viên đóng hay, nội dung kịch bản lạ hay nhưng cách xây dựng tình huống, tình tiết không hay, dài dòng, rối. Tình tiết lật quá nhiều dần rồi thấy nhàm. Mọi thứ đều lưng chừng, hài k hài, cảm động k cảm động. Xem xong không đọng lại được gì nhiều, vô lý rất nhiều chi tiết. Phải nói là chiến lược mkt quá tốt nên kích thích người mua vé xem']
        }
    }, 
    {
        id: 2,
        films: {
            name: 'Vệ Binh Dải Ngân Hà 3',
            percent: '88%',
            amountComment: '2K',
            imageUrl: 'https://img.cdn.vncdn.io/cinema/img/90225495390581584-drC4nWd3Bx3F9IHB7DpknXZS2zR.jpg'
        },
        users: {
            fullName: ['Nguyễn Hoàng Thuận', 'Truong Nhat Huong Giang'],
            avt: ['https://img.mservice.com.vn/avatars/avatar/ce08/7bb646fa21211f27e9231268601df38b77ca8fff737b0a96fa5c6018c6d8.png', 'https://img.mservice.com.vn/avatars/avatar/73fa/23938cb66283a6595dd88c8f271b4da92fe2cc96c33d4b9b5508f9379cae.png'],
            date: getFormattedDate(dateComment),
            comment: ['Đó giờ vẫn đánh giá cao nỗ lực của anh Hải, nhưng thực sự phần 6 này tệ hơn những phần trước nhiều. Phim dở, diễn viên thì đơ, kịch bản thì thiếu logic, lồng tiếng lúc thì khớp lúc thì lệch. 2/3 sau của phim drama dồn dập, xem mà phát mệt. Twist chồng twist mà không có cái nào phát triển cho tới. Trung bình 5p nhân vật vô bệnh viện 1 lần 🙃. Thay vì đầu tư cho PR và seeding thì ekip nên đầu tư 1 biên kịch mới!', 'Diễn viên đóng hay, nội dung kịch bản lạ hay nhưng cách xây dựng tình huống, tình tiết không hay, dài dòng, rối. Tình tiết lật quá nhiều dần rồi thấy nhàm. Mọi thứ đều lưng chừng, hài k hài, cảm động k cảm động. Xem xong không đọng lại được gì nhiều, vô lý rất nhiều chi tiết. Phải nói là chiến lược mkt quá tốt nên kích thích người mua vé xem']
        }
    },
    {
        id: 3,
        films: {
            name: 'Chuyện Xóm Tui: Con Nhót Mót Chồng',
            percent: '70%',
            amountComment: '2K',
            imageUrl:'https://traffic-edge10.cdn.vncdn.io/cinema/img/1879189178748444-maxresdefault%20(4).jpg'
        },
        users: {
            fullName: ['Nguyễn Hoàng Thuận', 'Truong Nhat Huong Giang'],
            avt: ['https://img.mservice.com.vn/avatars/avatar/ce08/7bb646fa21211f27e9231268601df38b77ca8fff737b0a96fa5c6018c6d8.png', 'https://img.mservice.com.vn/avatars/avatar/73fa/23938cb66283a6595dd88c8f271b4da92fe2cc96c33d4b9b5508f9379cae.png'],
            date: getFormattedDate(dateComment),
            comment: ['Đó giờ vẫn đánh giá cao nỗ lực của anh Hải, nhưng thực sự phần 6 này tệ hơn những phần trước nhiều. Phim dở, diễn viên thì đơ, kịch bản thì thiếu logic, lồng tiếng lúc thì khớp lúc thì lệch. 2/3 sau của phim drama dồn dập, xem mà phát mệt. Twist chồng twist mà không có cái nào phát triển cho tới. Trung bình 5p nhân vật vô bệnh viện 1 lần 🙃. Thay vì đầu tư cho PR và seeding thì ekip nên đầu tư 1 biên kịch mới!', 'Diễn viên đóng hay, nội dung kịch bản lạ hay nhưng cách xây dựng tình huống, tình tiết không hay, dài dòng, rối. Tình tiết lật quá nhiều dần rồi thấy nhàm. Mọi thứ đều lưng chừng, hài k hài, cảm động k cảm động. Xem xong không đọng lại được gì nhiều, vô lý rất nhiều chi tiết. Phải nói là chiến lược mkt quá tốt nên kích thích người mua vé xem']
        }
    },
    {
        id: 4,
        films: {
            name: 'Tình Người Duyên Ma Ngoại Truyện',
            percent: '70%',
            amountComment: '2K',
            imageUrl:'https://img.cdn.vncdn.io/cinema/img/8550546220461708-maxresdefault%20(2).jpg'
        },
        users: {
            fullName: ['Nguyễn Hoàng Thuận', 'Truong Nhat Huong Giang'],
            avt: ['https://img.mservice.com.vn/avatars/avatar/ce08/7bb646fa21211f27e9231268601df38b77ca8fff737b0a96fa5c6018c6d8.png', 'https://img.mservice.com.vn/avatars/avatar/73fa/23938cb66283a6595dd88c8f271b4da92fe2cc96c33d4b9b5508f9379cae.png'],
            date: getFormattedDate(dateComment),
            comment: ['Đó giờ vẫn đánh giá cao nỗ lực của anh Hải, nhưng thực sự phần 6 này tệ hơn những phần trước nhiều. Phim dở, diễn viên thì đơ, kịch bản thì thiếu logic, lồng tiếng lúc thì khớp lúc thì lệch. 2/3 sau của phim drama dồn dập, xem mà phát mệt. Twist chồng twist mà không có cái nào phát triển cho tới. Trung bình 5p nhân vật vô bệnh viện 1 lần 🙃. Thay vì đầu tư cho PR và seeding thì ekip nên đầu tư 1 biên kịch mới!', 'Diễn viên đóng hay, nội dung kịch bản lạ hay nhưng cách xây dựng tình huống, tình tiết không hay, dài dòng, rối. Tình tiết lật quá nhiều dần rồi thấy nhàm. Mọi thứ đều lưng chừng, hài k hài, cảm động k cảm động. Xem xong không đọng lại được gì nhiều, vô lý rất nhiều chi tiết. Phải nói là chiến lược mkt quá tốt nên kích thích người mua vé xem']
        }
    },
    {
        id: 5,
        films: {
            name: 'Trạm Tàu Ma',
            percent: '70%',
            amountComment: '2K',
            imageUrl: 'https://img.cdn.vncdn.io/cinema/img/7391475742549045-b9btd39FjrJidsSylrNMMAsilJ3.jpg'
        },
        users: {
            fullName: ['Nguyễn Hoàng Thuận', 'Truong Nhat Huong Giang'],
            avt: ['https://img.mservice.com.vn/avatars/avatar/ce08/7bb646fa21211f27e9231268601df38b77ca8fff737b0a96fa5c6018c6d8.png', 'https://img.mservice.com.vn/avatars/avatar/73fa/23938cb66283a6595dd88c8f271b4da92fe2cc96c33d4b9b5508f9379cae.png'],
            date: getFormattedDate(dateComment),
            comment: ['Đó giờ vẫn đánh giá cao nỗ lực của anh Hải, nhưng thực sự phần 6 này tệ hơn những phần trước nhiều. Phim dở, diễn viên thì đơ, kịch bản thì thiếu logic, lồng tiếng lúc thì khớp lúc thì lệch. 2/3 sau của phim drama dồn dập, xem mà phát mệt. Twist chồng twist mà không có cái nào phát triển cho tới. Trung bình 5p nhân vật vô bệnh viện 1 lần 🙃. Thay vì đầu tư cho PR và seeding thì ekip nên đầu tư 1 biên kịch mới!', 'Diễn viên đóng hay, nội dung kịch bản lạ hay nhưng cách xây dựng tình huống, tình tiết không hay, dài dòng, rối. Tình tiết lật quá nhiều dần rồi thấy nhàm. Mọi thứ đều lưng chừng, hài k hài, cảm động k cảm động. Xem xong không đọng lại được gì nhiều, vô lý rất nhiều chi tiết. Phải nói là chiến lược mkt quá tốt nên kích thích người mua vé xem']
        }
    }, 
    {
        id: 6,
        films: {
            name: 'c',
            percent: '70%',
            amountComment: '2K',
            imageUrl: 'https://img.cdn.vncdn.io/cinema/img/7391179876377590-y5FnpKxnKXiMt7zoyc0fzBnTa3W.jpg'
        },
        users: {
            fullName: ['Nguyễn Hoàng Thuận', 'Truong Nhat Huong Giang'],
            avt: ['https://img.mservice.com.vn/avatars/avatar/ce08/7bb646fa21211f27e9231268601df38b77ca8fff737b0a96fa5c6018c6d8.png', 'https://img.mservice.com.vn/avatars/avatar/73fa/23938cb66283a6595dd88c8f271b4da92fe2cc96c33d4b9b5508f9379cae.png'],
            date: getFormattedDate(dateComment),
            comment: ['Đó giờ vẫn đánh giá cao nỗ lực của anh Hải, nhưng thực sự phần 6 này tệ hơn những phần trước nhiều. Phim dở, diễn viên thì đơ, kịch bản thì thiếu logic, lồng tiếng lúc thì khớp lúc thì lệch. 2/3 sau của phim drama dồn dập, xem mà phát mệt. Twist chồng twist mà không có cái nào phát triển cho tới. Trung bình 5p nhân vật vô bệnh viện 1 lần 🙃. Thay vì đầu tư cho PR và seeding thì ekip nên đầu tư 1 biên kịch mới!', 'Diễn viên đóng hay, nội dung kịch bản lạ hay nhưng cách xây dựng tình huống, tình tiết không hay, dài dòng, rối. Tình tiết lật quá nhiều dần rồi thấy nhàm. Mọi thứ đều lưng chừng, hài k hài, cảm động k cảm động. Xem xong không đọng lại được gì nhiều, vô lý rất nhiều chi tiết. Phải nói là chiến lược mkt quá tốt nên kích thích người mua vé xem']
        }
    }, {
        id: 7,
        films: {
            name: 'Mèo Siêu Quậy Ở Viện Bảo Tàng',
            percent: '70%',
            amountComment: '2K', 
            imageUrl: 'https://img.cdn.vncdn.io/cinema/img/7384372024387365-eS1FsyGygY5FomanLeULzFKUvWX.jpg'
        },
        users: {
            fullName: ['Nguyễn Hoàng Thuận', 'Truong Nhat Huong Giang'],
            avt: ['https://img.mservice.com.vn/avatars/avatar/ce08/7bb646fa21211f27e9231268601df38b77ca8fff737b0a96fa5c6018c6d8.png', 'https://img.mservice.com.vn/avatars/avatar/73fa/23938cb66283a6595dd88c8f271b4da92fe2cc96c33d4b9b5508f9379cae.png'],
            date: getFormattedDate(dateComment),
            comment: ['Đó giờ vẫn đánh giá cao nỗ lực của anh Hải, nhưng thực sự phần 6 này tệ hơn những phần trước nhiều. Phim dở, diễn viên thì đơ, kịch bản thì thiếu logic, lồng tiếng lúc thì khớp lúc thì lệch. 2/3 sau của phim drama dồn dập, xem mà phát mệt. Twist chồng twist mà không có cái nào phát triển cho tới. Trung bình 5p nhân vật vô bệnh viện 1 lần 🙃. Thay vì đầu tư cho PR và seeding thì ekip nên đầu tư 1 biên kịch mới!', 'Diễn viên đóng hay, nội dung kịch bản lạ hay nhưng cách xây dựng tình huống, tình tiết không hay, dài dòng, rối. Tình tiết lật quá nhiều dần rồi thấy nhàm. Mọi thứ đều lưng chừng, hài k hài, cảm động k cảm động. Xem xong không đọng lại được gì nhiều, vô lý rất nhiều chi tiết. Phải nói là chiến lược mkt quá tốt nên kích thích người mua vé xem']
        }
    }, 
    {
        id: 8,
        films: {
            name: 'Âm Vực Chết',
            percent: '70%',
            amountComment: '400',
            imageUrl: 'https://img.cdn.vncdn.io/cinema/img/6705285569950689-8koF5lkt1wImZTUH1CkPgmHLtZF.jpg'
        },
        users: {
            fullName: ['Nguyễn Hoàng Thuận', 'Truong Nhat Huong Giang'],
            avt: ['https://img.mservice.com.vn/avatars/avatar/ce08/7bb646fa21211f27e9231268601df38b77ca8fff737b0a96fa5c6018c6d8.png', 'https://img.mservice.com.vn/avatars/avatar/73fa/23938cb66283a6595dd88c8f271b4da92fe2cc96c33d4b9b5508f9379cae.png'],
            date: getFormattedDate(dateComment),
            comment: ['Đó giờ vẫn đánh giá cao nỗ lực của anh Hải, nhưng thực sự phần 6 này tệ hơn những phần trước nhiều. Phim dở, diễn viên thì đơ, kịch bản thì thiếu logic, lồng tiếng lúc thì khớp lúc thì lệch. 2/3 sau của phim drama dồn dập, xem mà phát mệt. Twist chồng twist mà không có cái nào phát triển cho tới. Trung bình 5p nhân vật vô bệnh viện 1 lần 🙃. Thay vì đầu tư cho PR và seeding thì ekip nên đầu tư 1 biên kịch mới!', 'Diễn viên đóng hay, nội dung kịch bản lạ hay nhưng cách xây dựng tình huống, tình tiết không hay, dài dòng, rối. Tình tiết lật quá nhiều dần rồi thấy nhàm. Mọi thứ đều lưng chừng, hài k hài, cảm động k cảm động. Xem xong không đọng lại được gì nhiều, vô lý rất nhiều chi tiết. Phải nói là chiến lược mkt quá tốt nên kích thích người mua vé xem']
        }
    }, 
    {
        id: 9,
        films: {
            name: 'Đầu Gấu Đụng Đầu Đất',
            percent: '70%',
            amountComment: '700',
            imageUrl: 'https://img.cdn.vncdn.io/cinema/img/6704916054765301-unT5IUqiZgqcGyjcOMxomdxQOMj.jpg'
        },
        users: {
            fullName: ['Nguyễn Hoàng Thuận', 'Truong Nhat Huong Giang'],
            avt: ['https://img.mservice.com.vn/avatars/avatar/ce08/7bb646fa21211f27e9231268601df38b77ca8fff737b0a96fa5c6018c6d8.png', 'https://img.mservice.com.vn/avatars/avatar/73fa/23938cb66283a6595dd88c8f271b4da92fe2cc96c33d4b9b5508f9379cae.png'],
            date: getFormattedDate(dateComment),
            comment: ['Đó giờ vẫn đánh giá cao nỗ lực của anh Hải, nhưng thực sự phần 6 này tệ hơn những phần trước nhiều. Phim dở, diễn viên thì đơ, kịch bản thì thiếu logic, lồng tiếng lúc thì khớp lúc thì lệch. 2/3 sau của phim drama dồn dập, xem mà phát mệt. Twist chồng twist mà không có cái nào phát triển cho tới. Trung bình 5p nhân vật vô bệnh viện 1 lần 🙃. Thay vì đầu tư cho PR và seeding thì ekip nên đầu tư 1 biên kịch mới!', 'Diễn viên đóng hay, nội dung kịch bản lạ hay nhưng cách xây dựng tình huống, tình tiết không hay, dài dòng, rối. Tình tiết lật quá nhiều dần rồi thấy nhàm. Mọi thứ đều lưng chừng, hài k hài, cảm động k cảm động. Xem xong không đọng lại được gì nhiều, vô lý rất nhiều chi tiết. Phải nói là chiến lược mkt quá tốt nên kích thích người mua vé xem']
        }
    }
]

let commentGridWrapper = document.querySelector('.comment-item-grid');

let commentFilmsLength = commentFilms.length;

for (let i = 0; i < commentFilmsLength; i++) {
    let blockGridComment = document.createElement('div');
    blockGridComment.className = 'block-grid-comment';
    let html = `
        <div class="block-grid-comment-bg-image" style="background-image: url(${commentFilms[i].films.imageUrl})">
            <div class="block-grid-comment-bg-image-icon">
                <a href="" class="block-grid-comment-bg-image-icon-play">
                    <i class="fa-solid fa-play"></i>
                </a>
            </div>
            <div class="block-grid-comment-bg-image-film">
                <p class="bg-image-film-name">${commentFilms[i].films.name}</p>
                <div class="bg-image-film-rate">
                    <div class="bg-image-film-rate-percent">
                        <img src="https://static.mservice.io/fileuploads/svg/momo-file-230227094928.svg" alt="momo">
                        <span>${commentFilms[i].films.percent}</span>
                    </div>
                    <a href="" class="bg-image-film-rate-amount">
                        <i class="fa-solid fa-message"></i>
                        <span>${commentFilms[i].films.amountComment}</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="block-grid-comment-content">
            <div class="block-grid-text" >
            </div>
            <a href="" class="see-them">
                <span>Xem thêm</span>
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    `
    blockGridComment.innerHTML = html;
    commentGridWrapper.appendChild(blockGridComment);

    let commentBlock = document.querySelectorAll('.block-grid-text');
        for (let i = 0; i < commentFilmsLength; i++) {
            if (commentFilms[i].users.fullName.length > 0) {
                for (let index = 0; index < commentFilms[i].users.fullName.length; index++) {
                    let comments = document.createElement('div');
                    // commentBlock.appendChild(comments);
                }
            }
    }

}


