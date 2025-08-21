var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// document.addEventListener('mousemove', (e) => {
//     const circle = document.getElementById('floating-circle');
//     // 페이지 상에서의 마우스 위치를 기준으로 원을 이동
//     // 원의 크기를 고려하여 마우스 커서 위치에서 원의 너비와 높이의 절반을 빼줍니다.
//     const translateX = e.clientX - 10; // 원의 너비의 절반
//     const translateY = e.clientY - 10; // 원의 높이의 절반
//     circle.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
// });


// document.querySelectorAll('section').forEach(section => {
//     section.addEventListener('mouseenter', function () {
//         const text = this.getAttribute('data-text');
//         document.getElementById('floating-circle').textContent = text;
//     });
// });

