const ham = document.querySelector('.ham');
const navToggle = document.querySelector('.navToggle');
const ixs = document.querySelector('#ixs');

ixs.addEventListener('click', () => {
    navToggle.style.display = "none"
})
ham.addEventListener('click', () => {
    navToggle.style.display = "flex"
})

const mediaQuery = window.matchMedia('(min-width: 1161px)')
mediaQuery.addEventListener('change', handleTabletChange)

function handleTabletChange(e) {
    if (e.matches) {
        navToggle.style.display = "none"
    }
}