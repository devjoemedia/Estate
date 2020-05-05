let menu = document.querySelector('.mobile-menu');
let mobileNave = document.querySelector('.mobile-nav');
menu.addEventListener('click', () => {
    if(menu.classList.contains('rotate')) {
        menu.classList.remove('rotate')
        mobileNave.style.display = 'none';
    }else {
        mobileNave.style.display = 'block';
        menu.classList.add('rotate');
    }
    console.log(menu);
});

