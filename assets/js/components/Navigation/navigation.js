// $('#nav-toggle').click(function () {
//     $(this).toggleClass('active');
// });

const nav = document.querySelector('.nav-toggle');
nav.addEventListener('click', () => toggle());

function toggle() {
    nav.classList.toggle('active')
}