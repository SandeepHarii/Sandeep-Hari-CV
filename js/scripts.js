// JavaScript to toggle sidebar visibility
const burgerMenu = document.querySelector('.burger-menu');
const sidebar = document.querySelector('.sidebar');

burgerMenu.addEventListener('click', function() {
    sidebar.classList.toggle('open');
});
