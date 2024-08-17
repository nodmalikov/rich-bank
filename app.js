const elHamburger = document.querySelector('.hamburger');
const elSitenav = document.querySelector('.sitenav');

elHamburger.addEventListener('click', function () {
    elHamburger.classList.toggle('active');
    elSitenav.classList.toggle('active');
});
