document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('envelope').addEventListener('click', function () {
        const card = document.getElementById('card');

        // Thêm lớp 'show' để card nổi lên
        card.classList.add('show');

        // Xóa lớp 'show' sau khi transition kết thúc
        setTimeout(function () {
            card.classList.remove('show');
        }, 5000000000); // Thời gian đợi 5 giây
    });

    window.addEventListener("resize", () => {
        const width = window.innerWidth;
        const card = document.getElementById("card");

        if (width <= 600) {
            card.style.transform = "scale(0.8)";
        } else {
            card.style.transform = "scale(1)";
        }
    });

    // Lấy phần tử từ DOM
    const letterContent = document.getElementById('letterContent');
    const changeContentButton = document.getElementById('changeContentButton');
    const responseButtons = document.getElementById('responseButtons');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    if (!responseButtons || !yesButton || !noButton || !letterContent) {
        console.error("Một hoặc nhiều phần tử DOM không tìm thấy.");
        return;
    }

    // Nút đổi nội dung
    changeContentButton.addEventListener('click', () => {
        letterContent.innerHTML = `
        Ngày hôm nay của e có vui không <br>😊
        `;
        letterContent.style.transition = "all 0.5s ease-in-out";
        letterContent.style.color = "#d62828";
        letterContent.style.fontSize = "20px";

        responseButtons.style.display = 'block';
    });

    // Sự kiện nút "Có"
    yesButton.addEventListener('click', () => {
        if (yesButton.textContent === "Vui quá chừng") {
            letterContent.innerHTML = `
            Chia sẻ ngày vui<br> này với anh nữa<br> nhé! 😊
            `;
            letterContent.style.transition = "all 0.5s ease-in-out";
            letterContent.style.color = "#d62828";
            letterContent.style.fontSize = "20px";

            yesButton.textContent = "Chọn chỗ này!";
            noButton.style.display = "none";
        } else if (yesButton.textContent === "Chọn chỗ này!") {
            letterContent.innerHTML = `
            Em có muốn được<br> nhân đôi niềm vui <br>không🥹?
            `;
            letterContent.style.transition = "all 0.5s ease-in-out";
            letterContent.style.color = "#ff6347";
            letterContent.style.fontSize = "22px";

            yesButton.textContent = "Chọn tiếp chổ này!";
        } else if (yesButton.textContent === "Chọn tiếp chổ này!") {
            // Thêm nội dung cho mục tiếp theo
            letterContent.innerHTML = `
            Anh cũng muốn <br>được hiểu thêm <br>về em nửa!🤔,<br>hay là mình đi<br> dạo một vòng TP<br> nhé! 
            `;
            letterContent.style.transition = "all 0.5s ease-in-out";
            letterContent.style.color = "#0066cc";
            letterContent.style.fontSize = "22px";
    
            // Ẩn nút sau mục cuối
            
            yesButton.textContent = "Để anh lo! 🥰";
        } else if (yesButton.textContent === "Để anh lo! 🥰") {
            // Thêm nội dung cho mục tiếp theo
            letterContent.innerHTML = `
            Em chỉ cần đồng ý<br> mọi chuyện còn lại<br> để anh lo nhé! 🥰
            `;
            letterContent.style.transition = "all 0.5s ease-in-out";
            letterContent.style.color = "#0066cc";
            letterContent.style.fontSize = "22px";
            
        }
    });

    // Sự kiện nút "Không"
    noButton.addEventListener('click', () => {
        if (noButton.textContent === "Buồn heo") {
            letterContent.innerHTML = `
            Vậy để anh đưa em<br> đi chơi giải sầu<br> nhé! 🥰
            `;
            letterContent.style.transition = "all 0.5s ease-in-out";
            letterContent.style.color = "#d62828";
            letterContent.style.fontSize = "20px";
        
            noButton.textContent = "Chọn chổ này nhé !";
            yesButton.style.display = "none";
        } else if (noButton.textContent === "Chọn chổ này nhé !") {
            letterContent.innerHTML = `
            Anh biết vài chổ <br>xã xì chét 😉:)),<br>để a đưa e đi nhé!
            `;
            letterContent.style.transition = "all 0.5s ease-in-out";
            letterContent.style.color = "#008000";
            letterContent.style.fontSize = "22px";

            noButton.textContent = "Để anh lo! 🥰";
        } else if (noButton.textContent === "Để anh lo! 🥰") {
            letterContent.innerHTML = `
            Em chỉ cần đồng ý<br> mọi chuyện còn lại<br> để anh lo nhé! 🥰
            `;
            letterContent.style.transition = "all 0.5s ease-in-out";
            letterContent.style.color = "#008000";
            letterContent.style.fontSize = "22px";

        }
    });
});
