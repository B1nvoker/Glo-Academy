const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');
const menuListElements = document.querySelectorAll('.menu-list__item');

console.log(menuListElements);

const toggleMenu = () =>{
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('/humburger-menu-active');
}
const closeMenu = () =>{
    menuElem.classList.remove('menu-active');
    humburgerElem.classList.remove('/humburger-menu-active');
}

humburgerElem.addEventListener('click', toggleMenu);

menuListElements.forEach(elem => {
    elem.addEventListener('click', (e) =>{
        const target = e.target
        if (target.classList.contains('menu-list__link')) {
            closeMenu();
        }
    })
})


