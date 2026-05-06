// 1. Chọn tất cả các thanh kỹ năng
const skillBars = document.querySelectorAll('.skill-progress');

// 2. Định nghĩa hành động khi thanh kỹ năng hiện ra trong màn hình
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            
            // Lấy giá trị width từ data-width trong HTML
            const targetWidth = bar.getAttribute('data-width');
            
            // Gán width vào style để bắt đầu animation
            bar.style.width = targetWidth; 
            
            // Dừng theo dõi sau khi đã chạy animation
            observer.unobserve(bar);
        }
    });
});

// 3. Cho observer theo dõi tất cả các thanh
skillBars.forEach(bar => {
    observer.observe(bar);
});