document.getElementById('envelope').addEventListener('click', function() {
    var card = document.getElementById('card');
    var cardText = document.querySelector('.text');

    // Hiển thị thông tin khi click vào thư
    // cardText.innerHTML = "Merry Christmas, Nguyễn Phan Ngọc Như!";

    // Thêm lớp 'show' để card nổi lên
    card.classList.add('show');

    // Xóa lớp 'show' sau khi transition kết thúc
    setTimeout(function() {
        card.classList.remove('show');
    }, 2000); // Thời gian đợi 2 giây
});
