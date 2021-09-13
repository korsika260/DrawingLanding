// обработчик формы
const form = document.querySelector('.backfeed-form');
form.addEventListener('submit', event=>{
    event.preventDefault();
});


// слайдеры
new Swiper(".card-mobile__swiper", {
    spaceBetween: 20,
    wrapperClass: 'card-mobile__wrapper',
    slideClass: 'card-mobile__item',
    direction: 'horizontal',
    pagination: {
        el: ".card-mobile__pagination",
        clickable: true,
        bulletClass: 'card-mobile__bullet',
        bulletActiveClass: 'card-mobile__bullet_active',
    },
});

new Swiper(".paint-mobile", {
    spaceBetween: 20,
    wrapperClass: 'paint-mobile__wrapper',
    slideClass: 'paint-mobile__item',
    direction: 'horizontal',
    pagination: {
        el: ".paint-mobile__pagination",
        clickable: true,
        bulletClass: 'card-mobile__bullet',
        bulletActiveClass: 'card-mobile__bullet_active',
    },
});

