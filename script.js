var swiper = new Swiper(".swiper",{
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    effect: "coverflow",
    speed: 2000,

    coverflowEffect:{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><span>' + String(index + 1).padStart(2, '0') + '</span></span>';
        },
    },
});

gsap.from(".first .yellow", { y: -1000, duration: 2 });
gsap.from(".first .black", { y: 1000, duration: 2 });
gsap.from(".first img", { x: 1000, duration: 2 });
gsap.from(".first .small", { y: 100, opacity: 0, delay: 2.1 });
gsap.from(".first .big span", { y: 100, opacity: 0, stagger: 0.2, delay: 2.1 });
