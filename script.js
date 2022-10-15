let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.header__link')

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__menu--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {

  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__menu--active');

    document.body.classList.remove('stop-scroll');
  })
})

let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

let accordions = document.querySelectorAll('.accordion');

accordions.forEach(el => {
  el.addEventListener('click', (e) => {
    let self = e.currentTarget;
    let control = self.querySelector('.accordion__control');
    let content = self.querySelector('.accordion__content');

    self.classList.toggle('open');

    if (self.classList.contains('open')) {
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
  })
})

const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__content');

tabsBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(el => el.classList.remove('tabs__btn--active'));
    e.currentTarget.classList.add('tabs__btn--active');

    tabsContent.forEach(el => el.classList.remove('tabs__content--active'));
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content--active');
  });
});

const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search__btn');
const cancelBtn = document.querySelector('.cancel__btn');

searchBtn.onclick = () => {
  searchBtn.classList.add('search__btn--active');
  search.classList.add('search--active');
}

cancelBtn.onclick = () => {
  cancelBtn.classList.remove('search--active');
}
