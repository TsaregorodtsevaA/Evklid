// SWIPER


const swiper = new Swiper('.hero__swiper', {
  speed: 300,


  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,

  },

});


// TABS

let tabsBtn = document.querySelectorAll('.how-we-work-section__step');
let tabsItem = document.querySelectorAll('.how-we-work-section__bottom');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('how-we-work-section__step--active')});
    e.currentTarget.classList.add('how-we-work-section__step--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('how-we-work-section__bottom--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work-section__bottom--active');
  });
});


// BURGER


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-section__nav');
let menuLinks = menu.querySelectorAll('.nav__item-link');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header-section__nav--active');
  document.body.classList.toggle('stop--scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header-section__nav--active');
    document.body.classList.remove('stop--scroll');
  })
})


// SEARCH

let openSearch = document.querySelector('.search--open');
let searchForm = document.querySelector('.search');
let closeSeacrh = document.querySelector('.search__close');
let logo = document.querySelector('.header-section__logo');
let text = document.querySelector('.search__text');
let openedSearch = document.querySelector('.search__open');

openSearch.addEventListener('click', function() {
  openSearch.classList.toggle('invisible');
  logo.classList.toggle('logo__invisible');
  burger.classList.toggle('invisible');
  searchForm.classList.toggle('search--active');
  menu.classList.toggle('invisible');
  text.classList.toggle('search__text--active');
  openedSearch.classList.toggle('search__open--active');
  closeSeacrh.classList.toggle('search__close--active');
});

closeSeacrh.addEventListener ('click', function() {
  openSearch.classList.remove('invisible');
  logo.classList.remove('logo__invisible');
  burger.classList.remove('invisible');
  searchForm.classList.remove('search--active');
  menu.classList.remove('invisible');
  text.classList.remove('search__text--active');
  openedSearch.classList.remove('search__open--active');
  closeSeacrh.classList.remove('search__close--active');
})


//  ACCORDION


new Accordion('.accordion-container');