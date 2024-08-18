const elHamburger = document.querySelector('.hamburger');
const elSitenav = document.querySelector('.sitenav');
const elHeader = document.querySelector('.site-header');
const elMainContent = document.querySelector('.main-content');
const elSiteHeaderBg = document.querySelector('.site-header__bg');

// HAMBURGER
elHamburger.addEventListener('click', function () {
    elHamburger.classList.toggle('active');
    elSitenav.classList.toggle('active');
    elSiteHeaderBg.classList.toggle('active')
});

// OF MAIN MARGIN TOP
function headerAutoMargin() {
    const headerHeight = elHeader.offsetHeight;
    elMainContent.style.marginTop = `${headerHeight}px`
};

headerAutoMargin();
new ResizeObserver(headerAutoMargin).observe(elHeader);
