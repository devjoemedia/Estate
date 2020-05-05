let menu = document.querySelector('.mobile-menu');
let mobileNave = document.querySelector('.mobile-nav');
menu.addEventListener('click', () => {
    if(menu.classList.contains('rotate')) {
        menu.classList.remove('rotate')
        mobileNave.style.display = 'none';

        // When the modal is hidden, we want to remain at the top of the scroll position
        document.body.style.position = '';
        document.body.style.top = '';
    }else {
        mobileNave.style.display = 'block';
        menu.classList.add('rotate');
        // When the modal is shown, we want a fixed body
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    }
    console.log(menu);
});



// SWIPPER
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
  })